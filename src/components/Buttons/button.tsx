function Button(props:{
    Text: any;
    onClick?: any;
    disabled?: boolean;
    className?: string;
    id: string;
}) {
    const {
        Text,
        onClick,
        disabled,
        id,
        className,
    } = props;
    
    return (
        <button
            id={id}
            onClick={onClick}
            disabled={disabled}
            className={`${className}  bg-accent hover:shadow-lg rounded-md bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200 hover:bg-white hover:text-indigo-400`}
        >
            {Text}
        </button>
    );
}

export default Button; 