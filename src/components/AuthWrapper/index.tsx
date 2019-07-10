import React, { ReactNode } from "react"
import { useSelector } from "react-redux"
import { IReduxStore } from "../../redux/reducers"
import { Redirect } from "react-router"
import { ROLES } from "../../redux/reducers/account"

interface IProps {
  requiredRole: ROLES
  redirect?: boolean
  children: ReactNode
}

function AuthWrapper(props: IProps) {
  const role = useSelector((state: IReduxStore) => state.account.role)
  const doIHavePerm = role === props.requiredRole
  return (
    <>
      {doIHavePerm ? (
        props.children
      ) : props.redirect ? (
        <Redirect to="/404" />
      ) : (
        ""
      )}
    </>
  )
}

export default AuthWrapper
