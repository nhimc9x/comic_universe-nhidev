import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import { PUBLIC_ROUTES } from './routes/routes'
import { Fragment } from 'react'
import ResetScroll from './components/ResetScroll/ResetScroll'

function App() {

  return (
    <>
      <Router>
        <ResetScroll />
        <Routes>
          {PUBLIC_ROUTES.map((route, index) => {
            const Page = route.component
            let Layout = MainLayout
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            return (
              <Route key={index} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            )
          })}
        </Routes>
      </Router>
    </>
  )
}

export default App
