import FaqsForm from "../crud/Faqs";
import BlogForm from "../crud/Blogs";
import MetaDataForm from "../crud/MetaData";
import ContactUsForm from "../crud/ContactUs";
import ConfirmationModal from "../crud/ConfirmationModal";
import PagesForm from "../crud/PagesForm";
import BannerForm from "../crud/BannerForm";
import NewsForm from "../crud/NewsForm";
import ProductsForm from "../crud/ProductsForm";
import CategoryForm from "../crud/CategoryFrom";
import SubCategoryForm from "../crud/SubCategoryFrom";
import OrderForm from "../crud/OrderForm";

interface FormRendererProps {
  data: any;
  onClose?: any;
  manage?: boolean;
  formType: string;
  setPaginate?: any;
  setFilteredData?: any;
}

const FormRenderer: React.FC<FormRendererProps> = (props: any) => {
  console.log(props.manage);
  switch (props.formType) {
    case "Blogs":
      return <BlogForm {...props} />;
    case "Contact":
      return <ContactUsForm {...props} />;
    case "Delete":
      return <ConfirmationModal {...props} />;
    case "Faqs":
      return <FaqsForm {...props} />;
    case "AboutUs":
      return <PagesForm {...props} />;
    case "Seo":
      return <MetaDataForm {...props} />;
    case "Banners":
      return <BannerForm {...props} />;
    case "News":
      return <NewsForm {...props} />;
    case "Order":
      return <OrderForm {...props} />;
    case "Products":
      return <ProductsForm {...props} />;
    case "Category":
      return <CategoryForm {...props} />;
    case "Subcategory":
      return <SubCategoryForm {...props} />;
    default:
      return <div>No Form Exist</div>;
  }
};

export default FormRenderer;
