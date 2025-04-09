export type UserTypes = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
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

export interface filtredProps {
  search: string;
  setSearch: (val: string) => void;
  city: string;
  setCity: (val: string) => void;
  company: string;
  setCompany: (val: string) => void;
}
