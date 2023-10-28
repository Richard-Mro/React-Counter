const NotFound = () => {
  return (
    <div style={{marginTop:"15px"}}>
      <a
        href="/"
        style={{
          color: "darkblue",
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
