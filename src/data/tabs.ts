import { FaProductHunt, FaSliders } from "react-icons/fa6";
import { TbPackageExport, TbPackageOff, TbPackages } from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";
import { GrBlog, GrFormCheckmark, GrPhone, GrTransaction } from "react-icons/gr";
import { FaBlog, FaFile, FaHome, FaUser,FaBoxOpen } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { MdRateReview, MdManageAccounts, MdProductionQuantityLimits } from "react-icons/md";

// Define tabs
export const tabs = [
  {
    id: 8,
    icon: FaBoxOpen,
    label: "Manage Orders",
    href: "/dashboard/orders",
    pageTitle: "All Orders",
    permission: "Manage Orders",
  },
  {
    id: 6,
    icon: TbPackages,
    label: "Manage Category",
    href: "/dashboard/category",
    pageTitle: "Manage Category",
    permission: "Manage Category",
  },
  {
    id: 1,
    icon: TbPackageExport,
    label: "Manage Sub Category",
    pageTitle: "Mange Sub Category",
    permission: "Manage Subcategory",
    href: "/dashboard/sub-category",
  },
  {
    id: 7,
    icon: MdProductionQuantityLimits,
    label: "Manage Products",
    href: "/dashboard/products",
    pageTitle: "Manage Products",
    permission: "Manage Products",
  },

  {
    id: 14,
    icon: FaSliders,
    label: "Manage NewsLatter",
    href: "/dashboard/news-latter",
    pageTitle: "All News Latter",
    permission: "Manage NewsLatter",
  },
  {
    id: 10,
    icon: FaQuestionCircle,
    label: "Manage Contact Us",
    href: "/dashboard/contacts",
    pageTitle: "All Contacts",
    permission: "Manage Contact Us",
  },
];
