import { UserInterface } from 'interfaces/user';
import { TableInterface } from 'interfaces/table';
import { MenuInterface } from 'interfaces/menu';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  customer_id: string;
  table_id: string;
  menu_id: string;
  quantity: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  table?: TableInterface;
  menu?: MenuInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  table_id?: string;
  menu_id?: string;
}
