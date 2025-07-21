import {
  Container,
  Filters,
  ProductGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container>
        <Title text="Всі піци" size="lg" className="font-extrabold"></Title>
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фільтрація */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товарів */}
          <div className="flex-1">
            <div className="flex flex-col gap-16 ml-7">
              <ProductGroupList
                title={"Піци"}
                className="scroll-mt-[90px]"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Піца Гавайська",
                    imageUrl:
                      "https://prontopizza.ua/lutsk/wp-content/uploads/sites/16/2024/11/tropikana-kopiya-500x500.webp",
                    price: 120,
                    items: [{ price: 120 }],
                  },
                  {
                    id: 2,
                    name: "Піца Гавайська",
                    imageUrl:
                      "https://prontopizza.ua/lutsk/wp-content/uploads/sites/16/2024/11/tropikana-kopiya-500x500.webp",
                    price: 120,
                    items: [{ price: 120 }],
                  },
                  {
                    id: 3,
                    name: "Піца Гавайська",
                    imageUrl:
                      "https://prontopizza.ua/lutsk/wp-content/uploads/sites/16/2024/11/tropikana-kopiya-500x500.webp",
                    price: 120,
                    items: [{ price: 120 }],
                  },
                  {
                    id: 4,
                    name: "Піца Гавайська",
                    imageUrl:
                      "https://prontopizza.ua/lutsk/wp-content/uploads/sites/16/2024/11/tropikana-kopiya-500x500.webp",
                    price: 120,
                    items: [{ price: 120 }],
                  },
                  {
                    id: 5,
                    name: "Піца Гавайська",
                    imageUrl:
                      "https://prontopizza.ua/lutsk/wp-content/uploads/sites/16/2024/11/tropikana-kopiya-500x500.webp",
                    price: 120,
                    items: [{ price: 120 }],
                  },
                  {
                    id: 6,
                    name: "Піца Гавайська",
                    imageUrl:
                      "https://prontopizza.ua/lutsk/wp-content/uploads/sites/16/2024/11/tropikana-kopiya-500x500.webp",
                    price: 120,
                    items: [{ price: 120 }],
                  },
                ]}
              />
              <ProductGroupList
                title={"Закуски"}
                className="scroll-mt-[90px]"
                categoryId={3}
                items={[
                  {
                    id: 1,
                    name: "Піца Гавайська",
                    imageUrl:
                      "https://prontopizza.ua/lutsk/wp-content/uploads/sites/16/2024/11/tropikana-kopiya-500x500.webp",
                    price: 120,
                    items: [{ price: 120 }],
                  },
                  {
                    id: 2,
                    name: "Піца Гавайська",
                    imageUrl:
                      "https://prontopizza.ua/lutsk/wp-content/uploads/sites/16/2024/11/tropikana-kopiya-500x500.webp",
                    price: 120,
                    items: [{ price: 120 }],
                  },
                  {
                    id: 3,
                    name: "Піца Гавайська",
                    imageUrl:
                      "https://prontopizza.ua/lutsk/wp-content/uploads/sites/16/2024/11/tropikana-kopiya-500x500.webp",
                    price: 120,
                    items: [{ price: 120 }],
                  },
                  {
                    id: 4,
                    name: "Піца Гавайська",
                    imageUrl:
                      "https://prontopizza.ua/lutsk/wp-content/uploads/sites/16/2024/11/tropikana-kopiya-500x500.webp",
                    price: 120,
                    items: [{ price: 120 }],
                  },
                  {
                    id: 5,
                    name: "Піца Гавайська",
                    imageUrl:
                      "https://prontopizza.ua/lutsk/wp-content/uploads/sites/16/2024/11/tropikana-kopiya-500x500.webp",
                    price: 120,
                    items: [{ price: 120 }],
                  },
                  {
                    id: 6,
                    name: "Піца Гавайська",
                    imageUrl:
                      "https://prontopizza.ua/lutsk/wp-content/uploads/sites/16/2024/11/tropikana-kopiya-500x500.webp",
                    price: 120,
                    items: [{ price: 120 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
