import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    {
      values: "",
      label: "Relevance",
    },
    {
      values: "-added",
      label: "Data added",
    },
    {
      values: "name",
      label: "Name",
    },
    {
      values: "-released",
      label: "Release date",
    },
    {
      values: "-metacritic",
      label: "Popularity",
    },
    {
      values: "-rating",
      label: "Average rating",
    },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.values === sortOrder
  );
  return (
    <Menu>
      <MenuButton
        bg="gray.700"
        paddingX="7px"
        paddingY="5px"
        borderRadius={10}
        as={Button}
        rightIcon={<BsChevronBarDown />}
      >
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList bg="gray.700" paddingX="20px" paddingY="10px">
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.values)}
            key={order.values}
          >
            {" "}
            {order.label}{" "}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
