import './App.css'
import EffectsDemoEffectOnce from './compare hooks/UseStateAndUseEffect/EffectsDemoEffectOnce'
import EffectsDemoNoDependency from './compare hooks/UseStateAndUseEffect/EffectsDemoNoDependency'
import EffectsDemoTwoStatesWithDependeny from './compare hooks/UseStateAndUseEffect/EffectsDemoTwoStatesWithDependeny'
import EffectsDemoTwoStates from './compare hooks/UseStateAndUseEffect/EffectsDemoTwoStates'
import LoginUseReducer from './compare hooks/UseStateAndUseReducer/UseReducer'
import LoginUseState from './compare hooks/UseStateAndUseReducer/UseState'
import UseEffect from './components/useEffect/UseEffect'
import CounterReducer from './components/useReducer/ExampleReducer'
import UseReducer from './components/useReducer/UseReducer'
import UseState from './components/useState/UseState'
import EffectsDemoUnmount from './compare hooks/UseStateAndUseEffect/EffectsDemoUnmount'
import EffectsDemoCustomHook1 from './compare hooks/UseStateAndUseEffect/EffectsDemoCustomHook1'
import EffectsDemoCustomHook2 from './compare hooks/UseStateAndUseEffect/EffectsDemoCustomHook2'
import EffectsDemoEffectConditional from './compare hooks/UseStateAndUseEffect/EffectsDemoEffectConditional'
import EffectsDemoEffectPrevData from './compare hooks/UseStateAndUseEffect/EffectsDemoEffectPrevData'
import UseRef from './components/useRef/UseRef'
import EditableItem1 from './compare hooks/RenderPropAndCustomHook/function component/EditableItem1'
import EditableItem2 from './compare hooks/RenderPropAndCustomHook/function component/EditableItem2'
import EditableItem3 from './compare hooks/RenderPropAndCustomHook/class component/EditableItem3'
import ChangeProfile from './compare hooks/RenderPropAndCustomHook/custom hook/ChangeProfile'
import UserProfile from './compare hooks/RenderPropAndCustomHook/custom hook/UserProfile'
import User from './compare hooks/RenderPropAndCustomHook/custom hook/User'
import CardApp from './compare hooks/RenderPropAndCustomHook/renderprops/CardApp'
import CardAppJSX from './compare hooks/RenderPropAndCustomHook/renderpropsusejsx/CardAppJSX'
import UseLayoutEffect from './components/useLayoutEffect/UseLayoutEffect'
import UseImperativeHandle from './components/useImperativeHandle/UseImperativeHandle'
import UseContext from './components/useContext/UseContext'
import UseMemo from './components/useMemo/UseMemo'
import UseMemoModify from './components/useMemo/UseMemoModify'
import UseCallback from './components/useCallback/UseCallback'

function App() {
  return (
    <div>
      {/* Example useState */}
      <UseState />
      {/* Example useReducer */}
      <UseReducer />
      {/* Example useEffect */}
      <UseEffect />
      {/* Example useReducer */}
      <CounterReducer />
      {/* Comparing useState and useReducer */}
      <LoginUseState />
      <LoginUseReducer />
      {/* Comparing useState and useEffect */}
      <EffectsDemoNoDependency />
      <EffectsDemoTwoStates />
      <EffectsDemoTwoStatesWithDependeny />
      <EffectsDemoEffectOnce />
      <EffectsDemoUnmount />
      <EffectsDemoCustomHook1 />
      <EffectsDemoCustomHook2 />
      <EffectsDemoEffectConditional />
      <EffectsDemoEffectPrevData />
      {/* Example useRef */}
      <UseRef />
      {/* Render props and custom hook */}
      <EditableItem1 />
      <EditableItem2 />
      <EditableItem3 />
      {/* Custom hook using useContext hook */}
      <User>
        <ChangeProfile />
        <UserProfile />
      </User>
      {/* Render props */}
      <CardApp />
      <CardAppJSX />
      {/* Example useLayoutEffect */}
      <UseLayoutEffect />
      {/* Example useImperativeHandle */}
      <UseImperativeHandle />
      {/* Example useContext */}
      <UseContext />
      {/* Example useMemo */}
      <UseMemo />
      <UseMemoModify />
      {/* Example useCallback */}
      <UseCallback />
    </div>
  )
}

export default App
