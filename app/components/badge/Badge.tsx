type ChipProps = Readonly<{
  text: string;
}>;

const Badge = ({ text }: ChipProps): React.ReactNode => {
  return <span className="badge preset-filled-primary-500">{text}</span>;
};

export default Badge;
