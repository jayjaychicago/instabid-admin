import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import SearchInput from 'react-search-input';
import { AiFillShop } from 'react-icons/ai';
import { BsFillGearFill, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { FaGavel, FaShoppingBag } from 'react-icons/fa';
import { SlDocs } from 'react-icons/sl';

export class InstabidSidebar extends React.PureComponent {
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
                <MenuItem icon={<BsFillGrid3X3GapFill />}>My Products</MenuItem>
                <SubMenu icon={<FaGavel />} label="Bids">
                    <MenuItem icon={<FaShoppingBag />}>For Buyers</MenuItem>
                    <MenuItem icon={<AiFillShop />}>For Marketplace</MenuItem>
                </SubMenu>
                <hr />
                <MenuItem icon={<SlDocs />}>API Docs</MenuItem>
                <MenuItem icon={<SlDocs />}>UI Docs</MenuItem>
                <hr />
                <MenuItem icon={<BsFillGearFill />}>Settings</MenuItem>
                </Menu>
            </Sidebar>
        );
    }
}