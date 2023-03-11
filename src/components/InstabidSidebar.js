import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import SearchInput from 'react-search-input';
import { AiFillShop } from 'react-icons/ai';
import { BsFillGearFill, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { FaGavel, FaShoppingBag } from 'react-icons/fa';
import { SlDocs } from 'react-icons/sl';
import { Link } from 'react-router-dom';

export class InstabidSidebar extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Sidebar
                rootStyles={{
                    height: "100vh",
                    width: "16.66667%"
                }}
            >
                <Menu width="16.666667%">
                    <SearchInput className="sidebar-search-input" />
                    <hr />
                    <MenuItem component={<Link to="/products" />} icon={<BsFillGrid3X3GapFill />}>My Products</MenuItem>
                    <SubMenu icon={<FaGavel />} label="Bids">
                        <MenuItem component={<Link to="/buyers" />} icon={<FaShoppingBag />}>For Buyers</MenuItem>
                        <MenuItem component={<Link to="/marketplace" />} icon={<AiFillShop />}>For Marketplace</MenuItem>
                    </SubMenu>
                    <hr />
                    <MenuItem icon={<SlDocs />}>Documentation</MenuItem>
                    <hr />
                    <MenuItem icon={<BsFillGearFill />}>Settings</MenuItem>
                </Menu>
            </Sidebar>
        );
    }
}