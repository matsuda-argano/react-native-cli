import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

// ルート名とルートのパラメータのマッピングを持つオブジェクトタイプ
// undefined: パラメータなし
export type RootStackParamList = {
  Home: undefined;
  UserList: undefined;
  UserDetail: {id: number};
};
export type RootStackNavProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipocode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
