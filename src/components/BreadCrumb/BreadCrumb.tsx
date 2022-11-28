import Breadcrumb from "react-bootstrap/Breadcrumb";

const BreadcrumbExample: React.FC = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/recipes">Recipes</Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbExample;
