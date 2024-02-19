import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Form1 from "./first-steps/Form1"
import AccountType from './first-steps/AccoutType';
import UsForm1 from './user-form/UsForm1';
import UsForm2 from './user-form/UsForm2';
import UsForm3 from './user-form/UsForm3';
import UsForm4 from './user-form/UsForm4';
import UsPackages from './user-form/UsPackages';
import Infinte from './user-form/packages/Infinte';
import Private from './user-form/packages/Private';
import Prestige from './user-form/packages/Prestige';
import BonGamme from './user-form/packages/BonGamme';
import MassMarket from './user-form/packages/MassMarket';
import Etudiant from './user-form/packages/Etudiant';
import Mineur from './user-form/packages/Mineur';
import IncPack from './user-form/packages/sousPack/IncPack';
import OptPack from './user-form/packages/sousPack/OptPack';
import Convention from './components/Conventions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Form1 />
  },
  {
    path: '/account-type',
    element: <AccountType />
  },
  {
    path: '/user/convention',
    element: <Convention />
  },
  {
    path: '/user/form1',
    element: <UsForm1 />
  },
  {
    path: '/user/form2',
    element: <UsForm2 />
  },
  {
    path: '/user/form3',
    element: <UsForm3 />
  },
  {
    path: '/user/form4',
    element: <UsForm4 />
  },
  {
    path: '/user/packages/',
    element: <UsPackages />,
  },
  {
    path: '/user/packages/Infinite',
    element: <Infinte />,
    children: [
      {
        path: 'include',
        element: <IncPack />
      },
      {
        path: 'optionel',
        element: <OptPack />
      }
    ]
  },          
  {
    path: '/user/packages/Private',
    element: <Private />,
    children: [
      {
        path: 'include',
        element: <IncPack />
      },
      {
        path: 'optionel',
        element: <OptPack />
      }
    ]
  },
  {
    path: '/user/packages/Presitge',
    element: <Prestige />,
    children: [
      {
        path: 'include',
        element: <IncPack />
      },
      {
        path: 'optionel',
        element: <OptPack />
      }
    ]
  }, 
  {
    path: '/user/packages/BonneGamme',
    element: <BonGamme />,
    children: [
      {
        path: 'include',
        element: <IncPack />
      },
      {
        path: 'optionel',
        element: <OptPack />
      }
    ]
  },
  {
    path: '/user/packages/MassMarket',
    element: <MassMarket />,
    children: [
      {
        path: 'include',
        element: <IncPack />
      },
      {
        path: 'optionel',
        element: <OptPack />
      }
    ]
  },
  {
    path: '/user/packages/Etudiant',
    element: <Etudiant />,
    children: [
      {
        path: 'include',
        element: <IncPack />
      },
      {
        path: 'optionel',
        element: <OptPack />
      }
    ]
  },
  {
    path: '/user/packages/Mineur',
    element: <Mineur />,
    children: [
      {
        path: 'include',
        element: <IncPack />
      },
      {
        path: 'optionel',
        element: <OptPack />
      }
    ]
  },
])

function App() {

  return (
    <div className="flex justify-center">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
