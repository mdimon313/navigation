// types.ts

export interface SubItem {
  label: string;
}

export interface NavigationItem {
  icon: string; // Using string for emojis/simple characters
  label: string;
  subItems?: SubItem[]; // Optional array of sub-items
}

// Props for the SidebarItem component
export interface SidebarItemProps extends NavigationItem {}
