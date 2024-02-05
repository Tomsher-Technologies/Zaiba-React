export interface ProductListProps {
    requestedData: any;
    host: string | null | undefined;
}

export interface FilterBlockProps {
    uRS: any;
}

export interface ProductItemProps {
    product: any;
}

export interface BrandsFilterProps {
    brandLists: any;
    uRS: any;
}

export interface CategoriesFilterProps {
    categoryLists: any;
    uRS: any;
}

export interface ProductSortProps {
    uRS: any;
}

export interface InnerStripProps {
    title: string;
    items?: any;
}

export interface ProductDetailsProps {
    requestedData: any;
    slug: string;
    sku: string;
    host: string | null | undefined;
    ssrLoading: boolean;
}

export interface ProductInfoProps {
    sku: string;
    productDetails: any;
    imageTarget: any;
    isImageHovered: boolean;
    ssrLoading: boolean;
}

export interface ImagePreviewProps {
    imagePath: string;
    isFullScreen: boolean;
    setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ThumbImagesProps {
    galleryImages: any[];
    setIsImageHovered: React.Dispatch<React.SetStateAction<boolean>>;
    setImageTarget: any;
    slug: string;
}

export interface MagnifiedImageComponentProps {
    imagePath: string;
    isFullScreen: boolean;
    youTubeCode: string;
    setImageTarget: any;
    setIsImageHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProductTabsProps {
    tabs: any[];
}

export interface RelatedProductsProps {
    productSlug: string;
    categorySlug: string;
}
