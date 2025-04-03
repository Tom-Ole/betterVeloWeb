<script lang="ts">
    import type { FullAutoFill } from "svelte/elements";


    type AutoFileType = FullAutoFill | null | undefined
    type inputModeType = "email" | "tel" | "url" | "text" | "search" | "none" | "numeric" | "decimal" | null | undefined

    export let label: string = "Input";
    export let placeholder: string = "Enter text here";
    export let type: string = "text";
    export let value: string = "";
    export let disabled: boolean = false;
    export let readonly: boolean = false;
    export let required: boolean = false;
    export let min: number = 0;
    export let max: number = 100;
    export let step: number = 1;
    export let pattern: string = "";
    export let autocomplete: AutoFileType = null;
    export let inputmode: inputModeType = "text";
    export let spellcheck: boolean = false;
    export let size: number = 20;
    export let maxlength: number = 524288;
    export let minlength: number = 0;


</script>

<label>
    {label}
    <input
        type={type}
        placeholder={placeholder}
        bind:value
        disabled={disabled}
        readonly={readonly}
        required={required}
        min={min}
        max={max}
        step={step}
        pattern={pattern}
        autocomplete={autocomplete}
        inputmode={inputmode}
        spellcheck={spellcheck}
        size={size}
        maxlength={maxlength}
        minlength={minlength} />
</label>