export interface Widget {
  id: string;
  type: string;
  size: string;
  label: string;
  isVisible: boolean;
}

export interface SidebarWidgetState {
  widgets: Widget[];
  setWidgets: (widgets: Widget[]) => void;
}
