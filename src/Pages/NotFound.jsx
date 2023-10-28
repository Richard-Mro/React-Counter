const NotFound = () => {
  return (
    <div style={{paddingTop:"15px"}}>
      <a
        href="/"
        style={{
          color: "grey",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Back to Counter Page
      </a>
      <h1 style={{ color: "blue" }}>404 - Page Not Found</h1>
    </div>
  );
};

export default NotFound;
