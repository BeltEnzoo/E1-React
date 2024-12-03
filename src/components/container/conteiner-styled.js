import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20% 0%;
  height:auto;
  background-color: grey;
  padding: 10px 0px;
  border-radius: 4px;
  font-family: Arial, sans-serif;
  width: 100%;

  @media (max-width: 768px) {
    margin: 10% 0;
    padding: 15px;
  }
`;

export const Header = styled.h1`
  color: #fff;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const TaskInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  width: 100%;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 15px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 4px;
  flex: 1;
  margin-right: 10px;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export const AddButton = styled.button`
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 15px;
  }
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 4px 0px;
  
  }
`;

export const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 15px;
  margin: 10px 0;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px;
    margin: 8px 0;
  }
`;

export const TaskText = styled.span`
  font-size: 16px;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const DeleteButton = styled.button`

  padding: 5px 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 8px;
  }
`;

export const DeleteAll = styled.button`
  width: 100%;
  max-width: 500px;
  padding: 5px 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 8px;
    max-width: 100%;
  }
`; 