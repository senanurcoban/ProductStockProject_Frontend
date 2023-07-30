import React from 'react'
import { Dropdown, DropdownDivider, DropdownItem } from 'semantic-ui-react'
import {  NavLink } from 'react-router-dom';
export default function CartSummary() {
  return (
    <div>
     <Dropdown item text='Sepetiniz'>
            <Dropdown.Menu>
              <Dropdown.Item>Acer Laptop</Dropdown.Item>
              <Dropdown.Item>Asus Laptop</Dropdown.Item>
              <Dropdown.Item>Dell Laptop</Dropdown.Item>
              <DropdownDivider/>
              <DropdownItem as={NavLink} to="/cart"> Sepete Git </DropdownItem>
            </Dropdown.Menu>
          </Dropdown>
    </div>
  )
}

    
            
          