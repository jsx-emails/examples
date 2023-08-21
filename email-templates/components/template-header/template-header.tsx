import { HtmlComment } from "jsx-email-builder/components";

const styles = {
  header: {
    backgroundColor: "#101010",
    color: "#fff",
    padding: "16px 24px",
    fontSize: 24,
  },
};

function Header(props: { children: JsxChildren }) {
  const { children } = props;

  return (
    <HtmlComment startComment="Header:Start" endComment="Header:End">
      <div style={styles.header}>{children}</div>
    </HtmlComment>
  );
}

export default Header;
