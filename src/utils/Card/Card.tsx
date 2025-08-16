
type Props = {
    name: string;
    children?: React.ReactNode;
};
const CustomCard = ({name,children}:Props) => {
    return (
        <div>
            <h1>{name}</h1>
            <div>{children}</div>
        </div>

    )
}
export  default CustomCard;