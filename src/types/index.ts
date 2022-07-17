import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

// ルート名とルートのパラメータのマッピングを持つオブジェクトタイプ
// undefined: パラメータなし
export type RootStackParamList = {
  Home: undefined;
  Details: {itemId: number; otherParam?: any};
};
export type RootStackNavProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;
