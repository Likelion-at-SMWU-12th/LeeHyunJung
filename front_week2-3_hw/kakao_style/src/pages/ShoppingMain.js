import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ProductItem from "../components/ProductItem";
import { useSearchStore } from "../store/store";

const ShoppingMain = () => {
  const [data, setData] = useState([]);

  const { query, setQuery } = useSearchStore();
  const [searchInput, setSearchInput] = useState("");

  const shoppingData = async (searchQuery) => {
    const URL = "/v1/search/shop.json";
    const ClientID = "5tvIZreWtKfjKqWP5Lfe";
    const ClientSecret = "Cux7rbskse";

    await axios
      .get(URL, {
        params: {
          query: searchQuery,
          display: 24,
        },
        headers: {
          "X-Naver-Client-Id": ClientID,
          "X-Naver-Client-Secret": ClientSecret,
        },
      })
      .then((res) => {
        setData(res.data.items);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (query) {
      shoppingData(query);
    }
  }, [query]);

  const handleSearch = () => {
    setQuery(searchInput);
  };

  return (
    <>
      <SearchContainer>
        <SearchInput
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="검색어를 입력하세요"
        />
        <SearchButton onClick={handleSearch}>검색</SearchButton>
      </SearchContainer>
      <Container>
        {data &&
          data.map((item) => (
            <ShoppingList key={item.productId}>
              <ProductItem product={item} />
            </ShoppingList>
          ))}
      </Container>
    </>
  );
};

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 8px;
  font-size: 16px;
  width: 300px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: rgb(243, 222, 104);
  color: white;
  border: none;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 45px;
`;
export const ShoppingList = styled.div``;

export default ShoppingMain;
