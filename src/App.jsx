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


import CoForm1 from './company-form/CoForm1';
import CoForm2 from './company-form/CoForm2';
import CoForm3 from './company-form/CoForm3';
import CoForm4 from './company-form/CoForm4';
import CoForm5 from './company-form/CoForm5';
import CoForm6 from './company-form/CoForm6';
import CoPackages from './company-form/CoPackages';

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
  {
    path: '/company/',
    children: [
      {
        path: '/company/form1',
        element: <CoForm1 />
      },
      {
        path: '/company/form2',
        element: <CoForm2 />
      },
      {
        path: '/company/form3',
        element: <CoForm3 />
      },
      {
        path: '/company/form4',
        element: <CoForm4 />
      },
      {
        path: '/company/form5',
        element: <CoForm5 />
      },
      {
        path: '/company/form6',
        element: <CoForm6 />
      },
      {
        path:'/company/packages',
        element: <CoPackages />
      }
    ]
  }
  
])

function App() {

  return (
    <div className="flex justify-center">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
