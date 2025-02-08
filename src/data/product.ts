export interface ProductContent {
      name: string;
      description: string;
      details: string;
      benefits: string[];
}

export interface Product {
      name: string | undefined;
      description: string;
      details: string;
      benefits: any;
      id: number;
      price: string;
      image: string;
      rating: number;
      size: string;
      coverage: string;
      en: ProductContent;
      mr: ProductContent;
}

export const products: Product[] = [
      {
            name: "KADURAKSHAK Hi-Power 80000",
            description: "Advanced Agricultural Pest Repellent",
            details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
            benefits: [
                  "Powerful Formula – Pure concentrated bitter extract and biodegradable compounds.",
                  "Effective Protection – Prevents insect feeding and acts as an excellent repellent.",
                  "Rapid Action – Affects insect feeding ability, ensuring crop safety.",
            ],
            id: 1,
            price: "",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739039525/kadurakshak_hwtsuf.png",
            rating: 4.8,
            size: "100ml | 250ml | 500ml | 1 ltr",
            coverage: "100 sq. meters",
            en: {
                  name: "KADURAKSHAK Hi-Power 80000",
                  description:
                        "Rich in nutrients, perfect for all types of crops",
                  details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
                  benefits: [
                        "Improves soil structure",
                        "Enhances nutrient retention",
                        "Promotes healthy root growth",
                  ],
            },
            mr: {
                  name: "प्रीमियम सेंद्रिय खत",
                  description:
                        "पोषक तत्त्वांनी समृद्ध, सर्व प्रकारच्या पिकांसाठी योग्य",
                  details: "आमचे प्रीमियम सेंद्रिय खत काळजीपूर्वक निवडलेल्या सेंद्रिय पदार्थांपासून बनवलेले आहे, फायदेशीर सूक्ष्मजीवांनी समृद्ध आहे. मातीची संरचना आणि सुपीकता सुधारण्यासाठी उत्तम.",
                  benefits: [
                        "मातीची संरचना सुधारते",
                        "पोषक तत्त्वे धरून ठेवण्याची क्षमता वाढवते",
                        "मुळांची वाढ चांगली होते",
                  ],
            },
      },
      {
            name: "Premium Organic Compost",
            description: "Rich in nutrients, perfect for all types of crops",
            details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
            benefits: [
                  "Improves soil structure",
                  "Enhances nutrient retention",
                  "Promotes healthy root growth",
            ],
            id: 2,
            price: "$29.99",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739039525/super700_rnqele.png",
            rating: 4.8,
            size: "25 kg",
            coverage: "100 sq. meters",
            en: {
                  name: "Premium Organic Compost",
                  description:
                        "Rich in nutrients, perfect for all types of crops",
                  details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
                  benefits: [
                        "Improves soil structure",
                        "Enhances nutrient retention",
                        "Promotes healthy root growth",
                  ],
            },
            mr: {
                  name: "प्रीमियम सेंद्रिय खत",
                  description:
                        "पोषक तत्त्वांनी समृद्ध, सर्व प्रकारच्या पिकांसाठी योग्य",
                  details: "आमचे प्रीमियम सेंद्रिय खत काळजीपूर्वक निवडलेल्या सेंद्रिय पदार्थांपासून बनवलेले आहे, फायदेशीर सूक्ष्मजीवांनी समृद्ध आहे. मातीची संरचना आणि सुपीकता सुधारण्यासाठी उत्तम.",
                  benefits: [
                        "मातीची संरचना सुधारते",
                        "पोषक तत्त्वे धरून ठेवण्याची क्षमता वाढवते",
                        "मुळांची वाढ चांगली होते",
                  ],
            },
      },
      {
            name: "Premium Organic Compost",
            description: "Rich in nutrients, perfect for all types of crops",
            details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
            benefits: [
                  "Improves soil structure",
                  "Enhances nutrient retention",
                  "Promotes healthy root growth",
            ],
            id: 3,
            price: "$29.99",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739039525/perusamrat_qvmr8r.png",
            rating: 4.8,
            size: "25 kg",
            coverage: "100 sq. meters",
            en: {
                  name: "Premium Organic Compost",
                  description:
                        "Rich in nutrients, perfect for all types of crops",
                  details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
                  benefits: [
                        "Improves soil structure",
                        "Enhances nutrient retention",
                        "Promotes healthy root growth",
                  ],
            },
            mr: {
                  name: "प्रीमियम सेंद्रिय खत",
                  description:
                        "पोषक तत्त्वांनी समृद्ध, सर्व प्रकारच्या पिकांसाठी योग्य",
                  details: "आमचे प्रीमियम सेंद्रिय खत काळजीपूर्वक निवडलेल्या सेंद्रिय पदार्थांपासून बनवलेले आहे, फायदेशीर सूक्ष्मजीवांनी समृद्ध आहे. मातीची संरचना आणि सुपीकता सुधारण्यासाठी उत्तम.",
                  benefits: [
                        "मातीची संरचना सुधारते",
                        "पोषक तत्त्वे धरून ठेवण्याची क्षमता वाढवते",
                        "मुळांची वाढ चांगली होते",
                  ],
            },
      },
      {
            name: "Premium Organic Compost",
            description: "Rich in nutrients, perfect for all types of crops",
            details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
            benefits: [
                  "Improves soil structure",
                  "Enhances nutrient retention",
                  "Promotes healthy root growth",
            ],
            id: 4,
            price: "$29.99",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739039525/nutrifuze_kwo5sv.png",
            rating: 4.8,
            size: "25 kg",
            coverage: "100 sq. meters",
            en: {
                  name: "Premium Organic Compost",
                  description:
                        "Rich in nutrients, perfect for all types of crops",
                  details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
                  benefits: [
                        "Improves soil structure",
                        "Enhances nutrient retention",
                        "Promotes healthy root growth",
                  ],
            },
            mr: {
                  name: "प्रीमियम सेंद्रिय खत",
                  description:
                        "पोषक तत्त्वांनी समृद्ध, सर्व प्रकारच्या पिकांसाठी योग्य",
                  details: "आमचे प्रीमियम सेंद्रिय खत काळजीपूर्वक निवडलेल्या सेंद्रिय पदार्थांपासून बनवलेले आहे, फायदेशीर सूक्ष्मजीवांनी समृद्ध आहे. मातीची संरचना आणि सुपीकता सुधारण्यासाठी उत्तम.",
                  benefits: [
                        "मातीची संरचना सुधारते",
                        "पोषक तत्त्वे धरून ठेवण्याची क्षमता वाढवते",
                        "मुळांची वाढ चांगली होते",
                  ],
            },
      },
      {
            name: "Premium Organic Compost",
            description: "Rich in nutrients, perfect for all types of crops",
            details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
            benefits: [
                  "Improves soil structure",
                  "Enhances nutrient retention",
                  "Promotes healthy root growth",
            ],
            id: 5,
            price: "$29.99",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739039524/prime_nomzus.png",
            rating: 4.8,
            size: "25 kg",
            coverage: "100 sq. meters",
            en: {
                  name: "Premium Organic Compost",
                  description:
                        "Rich in nutrients, perfect for all types of crops",
                  details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
                  benefits: [
                        "Improves soil structure",
                        "Enhances nutrient retention",
                        "Promotes healthy root growth",
                  ],
            },
            mr: {
                  name: "प्रीमियम सेंद्रिय खत",
                  description:
                        "पोषक तत्त्वांनी समृद्ध, सर्व प्रकारच्या पिकांसाठी योग्य",
                  details: "आमचे प्रीमियम सेंद्रिय खत काळजीपूर्वक निवडलेल्या सेंद्रिय पदार्थांपासून बनवलेले आहे, फायदेशीर सूक्ष्मजीवांनी समृद्ध आहे. मातीची संरचना आणि सुपीकता सुधारण्यासाठी उत्तम.",
                  benefits: [
                        "मातीची संरचना सुधारते",
                        "पोषक तत्त्वे धरून ठेवण्याची क्षमता वाढवते",
                        "मुळांची वाढ चांगली होते",
                  ],
            },
      },
      {
            name: "Premium Organic Compost",
            description: "Rich in nutrients, perfect for all types of crops",
            details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
            benefits: [
                  "Improves soil structure",
                  "Enhances nutrient retention",
                  "Promotes healthy root growth",
            ],
            id: 6,
            price: "$29.99",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739039524/k-uptake-booster_fvxfzq.png",
            rating: 4.8,
            size: "25 kg",
            coverage: "100 sq. meters",
            en: {
                  name: "Premium Organic Compost",
                  description:
                        "Rich in nutrients, perfect for all types of crops",
                  details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
                  benefits: [
                        "Improves soil structure",
                        "Enhances nutrient retention",
                        "Promotes healthy root growth",
                  ],
            },
            mr: {
                  name: "प्रीमियम सेंद्रिय खत",
                  description:
                        "पोषक तत्त्वांनी समृद्ध, सर्व प्रकारच्या पिकांसाठी योग्य",
                  details: "आमचे प्रीमियम सेंद्रिय खत काळजीपूर्वक निवडलेल्या सेंद्रिय पदार्थांपासून बनवलेले आहे, फायदेशीर सूक्ष्मजीवांनी समृद्ध आहे. मातीची संरचना आणि सुपीकता सुधारण्यासाठी उत्तम.",
                  benefits: [
                        "मातीची संरचना सुधारते",
                        "पोषक तत्त्वे धरून ठेवण्याची क्षमता वाढवते",
                        "मुळांची वाढ चांगली होते",
                  ],
            },
      },
      {
            name: "Premium Organic Compost",
            description: "Rich in nutrients, perfect for all types of crops",
            details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
            benefits: [
                  "Improves soil structure",
                  "Enhances nutrient retention",
                  "Promotes healthy root growth",
            ],
            id: 7,
            price: "$29.99",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739039524/rain_sugxmw.png",
            rating: 4.8,
            size: "25 kg",
            coverage: "100 sq. meters",
            en: {
                  name: "Premium Organic Compost",
                  description:
                        "Rich in nutrients, perfect for all types of crops",
                  details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
                  benefits: [
                        "Improves soil structure",
                        "Enhances nutrient retention",
                        "Promotes healthy root growth",
                  ],
            },
            mr: {
                  name: "प्रीमियम सेंद्रिय खत",
                  description:
                        "पोषक तत्त्वांनी समृद्ध, सर्व प्रकारच्या पिकांसाठी योग्य",
                  details: "आमचे प्रीमियम सेंद्रिय खत काळजीपूर्वक निवडलेल्या सेंद्रिय पदार्थांपासून बनवलेले आहे, फायदेशीर सूक्ष्मजीवांनी समृद्ध आहे. मातीची संरचना आणि सुपीकता सुधारण्यासाठी उत्तम.",
                  benefits: [
                        "मातीची संरचना सुधारते",
                        "पोषक तत्त्वे धरून ठेवण्याची क्षमता वाढवते",
                        "मुळांची वाढ चांगली होते",
                  ],
            },
      },
      {
            name: "Premium Organic Compost",
            description: "Rich in nutrients, perfect for all types of crops",
            details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
            benefits: [
                  "Improves soil structure",
                  "Enhances nutrient retention",
                  "Promotes healthy root growth",
            ],
            id: 8,
            price: "$29.99",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739039525/protoplant_s3ag5s.png",
            rating: 4.8,
            size: "25 kg",
            coverage: "100 sq. meters",
            en: {
                  name: "Premium Organic Compost",
                  description:
                        "Rich in nutrients, perfect for all types of crops",
                  details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
                  benefits: [
                        "Improves soil structure",
                        "Enhances nutrient retention",
                        "Promotes healthy root growth",
                  ],
            },
            mr: {
                  name: "प्रीमियम सेंद्रिय खत",
                  description:
                        "पोषक तत्त्वांनी समृद्ध, सर्व प्रकारच्या पिकांसाठी योग्य",
                  details: "आमचे प्रीमियम सेंद्रिय खत काळजीपूर्वक निवडलेल्या सेंद्रिय पदार्थांपासून बनवलेले आहे, फायदेशीर सूक्ष्मजीवांनी समृद्ध आहे. मातीची संरचना आणि सुपीकता सुधारण्यासाठी उत्तम.",
                  benefits: [
                        "मातीची संरचना सुधारते",
                        "पोषक तत्त्वे धरून ठेवण्याची क्षमता वाढवते",
                        "मुळांची वाढ चांगली होते",
                  ],
            },
      },
      {
            name: "Premium Organic Compost",
            description: "Rich in nutrients, perfect for all types of crops",
            details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
            benefits: [
                  "Improves soil structure",
                  "Enhances nutrient retention",
                  "Promotes healthy root growth",
            ],
            id: 9,
            price: "$29.99",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739039525/rootlongster_iiq024.png",
            rating: 4.8,
            size: "25 kg",
            coverage: "100 sq. meters",
            en: {
                  name: "Premium Organic Compost",
                  description:
                        "Rich in nutrients, perfect for all types of crops",
                  details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
                  benefits: [
                        "Improves soil structure",
                        "Enhances nutrient retention",
                        "Promotes healthy root growth",
                  ],
            },
            mr: {
                  name: "प्रीमियम सेंद्रिय खत",
                  description:
                        "पोषक तत्त्वांनी समृद्ध, सर्व प्रकारच्या पिकांसाठी योग्य",
                  details: "आमचे प्रीमियम सेंद्रिय खत काळजीपूर्वक निवडलेल्या सेंद्रिय पदार्थांपासून बनवलेले आहे, फायदेशीर सूक्ष्मजीवांनी समृद्ध आहे. मातीची संरचना आणि सुपीकता सुधारण्यासाठी उत्तम.",
                  benefits: [
                        "मातीची संरचना सुधारते",
                        "पोषक तत्त्वे धरून ठेवण्याची क्षमता वाढवते",
                        "मुळांची वाढ चांगली होते",
                  ],
            },
      },
      {
            name: "Premium Organic Compost",
            description: "Rich in nutrients, perfect for all types of crops",
            details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
            benefits: [
                  "Improves soil structure",
                  "Enhances nutrient retention",
                  "Promotes healthy root growth",
            ],
            id: 1,
            price: "$29.99",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739039525/kadurakshak_hwtsuf.png",
            rating: 4.8,
            size: "25 kg",
            coverage: "100 sq. meters",
            en: {
                  name: "Premium Organic Compost",
                  description:
                        "Rich in nutrients, perfect for all types of crops",
                  details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
                  benefits: [
                        "Improves soil structure",
                        "Enhances nutrient retention",
                        "Promotes healthy root growth",
                  ],
            },
            mr: {
                  name: "प्रीमियम सेंद्रिय खत",
                  description:
                        "पोषक तत्त्वांनी समृद्ध, सर्व प्रकारच्या पिकांसाठी योग्य",
                  details: "आमचे प्रीमियम सेंद्रिय खत काळजीपूर्वक निवडलेल्या सेंद्रिय पदार्थांपासून बनवलेले आहे, फायदेशीर सूक्ष्मजीवांनी समृद्ध आहे. मातीची संरचना आणि सुपीकता सुधारण्यासाठी उत्तम.",
                  benefits: [
                        "मातीची संरचना सुधारते",
                        "पोषक तत्त्वे धरून ठेवण्याची क्षमता वाढवते",
                        "मुळांची वाढ चांगली होते",
                  ],
            },
      },
      {
            name: "Premium Organic Compost",
            description: "Rich in nutrients, perfect for all types of crops",
            details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
            benefits: [
                  "Improves soil structure",
                  "Enhances nutrient retention",
                  "Promotes healthy root growth",
            ],
            id: 1,
            price: "$29.99",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739039525/kadurakshak_hwtsuf.png",
            rating: 4.8,
            size: "25 kg",
            coverage: "100 sq. meters",
            en: {
                  name: "Premium Organic Compost",
                  description:
                        "Rich in nutrients, perfect for all types of crops",
                  details: "Our premium organic compost is made from carefully selected organic materials, enriched with beneficial microorganisms. Perfect for improving soil structure and fertility.",
                  benefits: [
                        "Improves soil structure",
                        "Enhances nutrient retention",
                        "Promotes healthy root growth",
                  ],
            },
            mr: {
                  name: "प्रीमियम सेंद्रिय खत",
                  description:
                        "पोषक तत्त्वांनी समृद्ध, सर्व प्रकारच्या पिकांसाठी योग्य",
                  details: "आमचे प्रीमियम सेंद्रिय खत काळजीपूर्वक निवडलेल्या सेंद्रिय पदार्थांपासून बनवलेले आहे, फायदेशीर सूक्ष्मजीवांनी समृद्ध आहे. मातीची संरचना आणि सुपीकता सुधारण्यासाठी उत्तम.",
                  benefits: [
                        "मातीची संरचना सुधारते",
                        "पोषक तत्त्वे धरून ठेवण्याची क्षमता वाढवते",
                        "मुळांची वाढ चांगली होते",
                  ],
            },
      },
];
