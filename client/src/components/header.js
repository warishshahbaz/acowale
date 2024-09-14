import React, { useState } from "react";
import { Select, Input, Button, Drawer, Menu, Icon } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "antd/dist/reset.css"; // Import Ant Design styles

const { Option } = Select;

const countries = [
    { name: "India", code: "in" },
  { name: "United States", code: "us" },
  { name: "Canada", code: "ca" },
  { name: "United Kingdom", code: "gb" },
  // Add more countries as needed
];

const languages = [
    { name: "Hindi", code: "hi" },
  { name: "English", code: "en" },
  { name: "French", code: "fr" },
  { name: "Spanish", code: "es" },
  // Add more languages as needed
];

const Header = ({
    setSearch,
    search,
    setCountry,
    country,
    language,
    setLanguage,
    handleSubmit
}) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleCountryChange = (value) => {
    setCountry(value);
  };

  const handleLanguageChange = (value) => {
    setLanguage(value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <div className=" flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <div className="text-lg font-bold">ACONEWS</div>
        <div className="hidden md:flex space-x-4">
          <Select
            placeholder="Select Country"
            className="w-32"
            onChange={handleCountryChange}
            value={country}
          >
            {countries.map((country) => (
              <Option key={country.code} value={country.code}>
                {country.name}
              </Option>
            ))}
          </Select>

          <Select
            placeholder="Select Language"
            className="w-32"
            onChange={handleLanguageChange}
            value={language}
          >
            {languages.map((language) => (
              <Option key={language.code} value={language.code}>
                {language.name}
              </Option>
            ))}
          </Select>

          <Input
            placeholder="Search"
            className="w-64"
            value={search}
            onChange={handleSearchChange}
          />

          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
        <div className="md:hidden">
          <MenuOutlined onClick={toggleDrawer} />
        </div>
      </header>

      <Drawer
        title="Filters"
        placement="right"
        closable={true}
        onClose={toggleDrawer}
        visible={drawerVisible}
      >
        <Select
          placeholder="Select Country"
          className="w-full mb-4"
          onChange={handleCountryChange}
          value={country}
        >
          {countries.map((country) => (
            <Option key={country.code} value={country.code}>
              {country.name}
            </Option>
          ))}
        </Select>

        <Select
          placeholder="Select Language"
          className="w-full mb-4"
          onChange={handleLanguageChange}
          value={languages}
        >
          {languages.map((language) => (
            <Option key={language.code} value={language.code}>
              {language.name}
            </Option>
          ))}
        </Select>

        <Input
          placeholder="Search"
          className="w-full mb-4"
          value={search}
          onChange={handleSearchChange}
        />

        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Drawer>

      
    </div>
  );
};

export default Header;
