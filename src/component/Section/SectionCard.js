function SectionCard({ ...props }) {
  const { children, ...attr } = props;
  return <section {...attr}>{props.children}</section>;
}

export default SectionCard;
