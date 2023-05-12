import { FC } from "react";
import GridPage from "../components/grid";
import Pagination from "../components/pagination";
import HeaderPage from "../components/header";

const MainPage: FC = () => {

    return (
        <>
            <HeaderPage />
            <GridPage />
            <Pagination />
        </>
    );
}

export default MainPage;