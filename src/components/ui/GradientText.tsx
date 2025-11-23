const Gradienttext = ({
    content,
    prop,
}: {
    content: string;
    prop?: string;
}) => {
    return (
        <h2
            className={`mb-4 text-4xl font-bold text-transparent bg-clip-text bg-linear-to-br from-[#001230] from-0% via-[#003896] via-70% to-[#003896] to-100% md:text-5xl md:w-3xl ${prop}`}
        >
            {content}
        </h2>
    );
};

export default Gradienttext;
