import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const containerStyle = {
    maxWidth: "900px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    lineHeight: "1.6",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
    fontSize: "36px",
    fontWeight: "bold",
    letterSpacing: "1px",
  };

  const subheadingStyle = {
    textAlign: "center",
    color: "#555",
    marginBottom: "40px",
    fontSize: "20px",
  };

  const paragraphStyle = {
    marginBottom: "20px",
    color: "#444",
    fontSize: "18px",
    textAlign: "justify",
  };

  const highlightStyle = {
    color: "#007BFF",
    fontWeight: "bold",
  };

  const imageContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px",
  };

  const imageStyle = {
    width: "500px",
    maxWidth: "500px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const sectionTitleStyle = {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
    fontWeight: "bold",
    letterSpacing: "0.5px",
  };

  const listStyle = {
    paddingLeft: "20px",
    marginBottom: "20px",
    color: "#555",
    fontSize: "18px",
  };

  const listItemStyle = {
    marginBottom: "10px",
  };

  return (
   <>
    <div style={containerStyle}>
      <h1 style={headingStyle}>About La Collection</h1>
      <p style={subheadingStyle}>
        Discover timeless fashion with a modern touch.
      </p>

      <div style={imageContainerStyle}>
        <img
          src="data:image/png;base64,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" // Replace with the actual image link
          alt="La Collection"
          style={imageStyle}
        />
      </div>

      <p style={paragraphStyle}>
        At <span style={highlightStyle}>La Collection</span>, we believe that
        fashion is more than just clothing—it's a statement, a way of life. Our
        collections are designed with the modern woman in mind, blending
        timeless elegance with contemporary style.
      </p>

      <h2 style={sectionTitleStyle}>Our Vision</h2>
      <p style={paragraphStyle}>
        We are committed to creating high-quality pieces that stand the test of
        time. Every item in our collection is crafted with precision, from the
        finest materials, to ensure that you not only look good but feel
        confident. Our vision is to empower women by offering sophisticated,
        versatile, and chic fashion choices for every occasion.
      </p>

      <h2 style={sectionTitleStyle}>Our Values</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <strong>Quality:</strong> We use only premium fabrics and materials.
        </li>
        <li style={listItemStyle}>
          <strong>Sustainability:</strong> We are dedicated to ethical and
          sustainable fashion practices.
        </li>
        <li style={listItemStyle}>
          <strong>Innovation:</strong> Combining modern design with traditional
          craftsmanship.
        </li>
        <li style={listItemStyle}>
          <strong>Empowerment:</strong> We celebrate the strength and beauty of
          every woman.
        </li>
      </ul>

      <h2 style={sectionTitleStyle}>Our Story</h2>
      <p style={paragraphStyle}>
        Founded in 2010, <span style={highlightStyle}>La Collection</span> began
        as a small boutique with a simple idea: to create timeless fashion that
        speaks to every woman. Over the years, we have grown into a global brand
        known for our unique blend of modern trends and classic elegance. Today,
        we continue to innovate and inspire, bringing you fashion that feels as
        good as it looks.
      </p>

      <h2 style={sectionTitleStyle}>Join the Journey</h2>
      <p style={paragraphStyle}>
        At La Collection, fashion is a journey, and we invite you to join us.
        Whether you're dressing for a special occasion or adding to your
        everyday wardrobe, we offer the perfect pieces to complement your style.
        Explore our collections today and find your signature look.
      </p>
    <Link  to='/' className="btn btn-outline-dark me-2" >Home</Link>
    </div>
   </>
   
  );
};

export default AboutUs;
