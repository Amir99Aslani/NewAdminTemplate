import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle
    `
  body {
    background-color: ${({theme}) => theme.body};
  }
  #nav-bar {
    background-color: ${({theme}) => theme.sideBar};
  }
  #nav-bar a{
    color: ${({theme}) => theme.text};
  }
  #nav-toggle-burger {
    &:before,
    &:after {
      background-color: ${({theme}) => theme.text};
    }
  }

  .table-wrapper .responsive-table thead th{
    background-color: ${({theme}) => theme.tableHeader};
    color: ${({theme}) => theme.text};
  }

  .table-wrapper .responsive-table tbody{
    background-color: ${({theme}) => theme.tableHeader};
  }

  .table-wrapper .responsive-table tbody tr{
    background-color: ${({theme}) => theme.tableRow};
  }

  .table-wrapper .responsive-table tbody tr:nth-of-type(even){
    background-color: ${({theme}) => theme.tableRowEven};
  }

  .table-wrapper .responsive-table tbody th{
    color: ${({theme}) => theme.text};
  }
  .table-wrapper .responsive-table tbody tr td input{
    color: ${({theme}) => theme.text};
  }
  .table-wrapper .responsive-table tbody tr td{
    color: ${({theme}) => theme.text};
  }
  .paginationContainer {
    li {
      button {
        color: ${({theme}) => theme.text};
      }
    }
  }
  
`;
