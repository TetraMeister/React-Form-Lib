![Mockup](/docs/mockup.svg)

# MultiForm — Neumorphic Multi-Step Form

See the live version of [MultiForm](https://neuromorphicform.netlify.app)

A reusable, multi-step form library built around a compound-component API and styled entirely in the neumorphism trend. Instead of hardcoding a single form, the project exposes a small set of composable building blocks (`MultiForm.Section`, `MultiForm.Input`, `MultiForm.Select`, `MultiForm.Group`) that you wire together declaratively, while validation, step navigation and shared state are handled behind the scenes by a dedicated context.

**Main features**:

- Three-step form with smooth back-and-forth navigation between steps
- Compound component API — compose the form declaratively from small pieces
- Per-step validation powered by React Hook Form + Zod
- Custom dropdown built without the native `<select>` element
- Animated radio and checkbox controls drawn entirely with CSS pseudo-elements
- Fully token-driven neumorphic design system in a single global stylesheet

&nbsp;

## 💡 Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)

&nbsp;

## 💿 Installation

The project uses node and npm (bootstrapped with Create React App). Having them installed, type into the terminal:

```bash
npm i
npm start
```

The app will be available at `http://localhost:3000`.

&nbsp;

## 🤔 Solutions provided in the project

- **Compound component pattern** — the public API is assembled by attaching the sub-components onto the main one, so consumers compose the form with intuitive dot-notation (`MultiForm.Section`, `MultiForm.Input`, etc.):

```js
export default Object.assign(MultiForm, {
    Group: MultiFormGroup,
    Input: MultiFormInput,
    Section: MultiFormSection,
    Select: MultiFormSelect,
});
```

Sections don't need to know which step they are on or which handler to call — the parent clones each child and injects the right props at render time:

```js
{
    React.Children.map(children, (child, index) => {
        const step = child.props.$nr ?? index + 1;
        const isActive = step === currentStep;

        return React.cloneElement(child, {
            $onSubmit: isLastStep ? handleFinalSubmit : handleNext,
            $prevStep: !isFirstStep ? prevStep : null,
            $display: isActive,
        });
    });
}
```

&nbsp;

- **Per-step validation** — each section collects the field names of its own inputs and validates only those before advancing, so a user is never blocked by errors on a step they haven't reached yet:

```js
const fields = [
    ...new Set(
        React.Children.map(children, (child) => {
            if (child.props.$type === 'submit') {
                return null;
            }
            return child.props.$name;
        }).filter(Boolean)
    ),
];
```

```js
const handleNext = useCallback(
    async (fields) => {
        const isValid = await trigger(fields);
        if (isValid) {
            nextStep();
        }
    },
    [trigger, nextStep]
);
```

&nbsp;

- **Zod + React Hook Form** — the whole form is driven by a single Zod schema plugged into React Hook Form through the resolver. Validation runs on touch and re-validates on change, which is what powers the immediate inline feedback:

```js
const { register, handleSubmit, trigger, setValue, reset, formState } = useForm({
    resolver: zodResolver($schema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
});
```

```js
const schema = z.object({
    firstName: z.string().min(1, 'Imię jest wymagane'),
    email: z.string().email('Nieprawidłowy email'),
    password: z.string().min(8, 'Hasło musi mieć minimum 8 znaków'),
    skills: z
        .array(z.enum(['React', 'TypeScript', 'Node.js', 'GraphQL']))
        .min(1, 'Wybierz przynajmniej jedną umiejętność'),
});
```

&nbsp;

- **Custom select** — instead of the native `<select>`, the dropdown is a styled button list. A hidden input stays registered with React Hook Form, so the field validates like any other while the visible value is kept in a separate display state:

```js
<input type="hidden" {...register($name)} />
```

```js
const handleValueChange = (option) => {
    setValue($name, String(option));
    setDisplayValue($name, String(option));
    setIsOpen(false);
};
```

&nbsp;

- **Pseudo-element animations for radio & checkbox** — the real input is visually hidden, and the entire control (track, dot/tick, checked state) is drawn on the label's `::before` and `::after`. The `:has()` selector reacts to the input's `:checked` state with no JS:

```js
const StyledMultiFormInputCheck = styled(StyledMultiFormInput)`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
`;
```

```css
label::after {
    content: '';
    position: absolute;
    left: 6px;
    width: 10px;
    height: 10px;
    background: var(--neu-accent);
    border-radius: $ {
        $type==='radio'? '50%' : '2px';
    }
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
}

&:has(input:checked) label::after {
    transform: scale(1);
}
```

&nbsp;

- **Unified semantic neumorphic style** — the whole look lives in one global stylesheet as CSS custom properties. Shadow tokens are computed from a single `--neu-distance` / `--neu-blur` pair, so the neumorphic depth can be re-tuned in one place, and components reference shadows by intent (`--neu-shadow-out`, `--neu-shadow-in`, `--neu-shadow-flat`) rather than raw values:

```css
--neu-shadow-out:
    var(--neu-distance) var(--neu-distance) var(--neu-blur) var(--neu-shadow-dark),
    calc(var(--neu-distance) * -1) calc(var(--neu-distance) * -1) var(--neu-blur) var(--neu-shadow-light);
```

&nbsp;

## 💭 Conclusions for future projects

#### Type safety:

There are no runtime prop checks at the moment. Adding `PropTypes` would be a quick win, but the cleaner long-term move is rewriting the library to **TypeScript** — the prop contracts (`$type`, `$name`, `$options`) and the inferred Zod schema would pair very well with static types.

#### Self-computing color system:

Right now the light/dark shadow colors are declared by hand in `:root`. A nicer system would derive the full neumorphic palette from a single base color, automatically calculating the lighter and darker shadow tones — changing one variable would re-theme everything.

#### Configurable success message:

The post-submit notification text is currently hardcoded. Exposing it as a prop (per form instance) would make the component reusable across different contexts without editing the source.

#### Single-step form handling:

Single-step usage works mostly by _not_ rendering the `Prev` button, which is more of a side effect than an explicit case. A dedicated branch for one-step forms would make the navigation logic clearer and less implicit.

&nbsp;

## 🙋‍♂️ Feel free to contact me

Write sth nice ;) Find me on [LinkedIn](https://www.linkedin.com/in/łukasz-skrzypczyński-26759b318/)

&nbsp;

## 👏 Special thanks

Thanks to my Mentor Mateusz Bogolubow [devmentor.pl](https://devmentor.pl/) — for providing me with this task and for the code review.
