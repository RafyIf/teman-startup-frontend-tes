function SectionFlex({ ...props }) {
  return <div className={`flex flex-wrap -mx-4 ${props.className}`}>{props.children}</div>;
}

export default SectionFlex;
