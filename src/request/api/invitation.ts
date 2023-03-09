import {opRequest} from '.'
import {REQUEST_METHOD} from '@/common/constants'

export const getInvitationList = () => opRequest({
    url: '/invitationList',
    method: REQUEST_METHOD.GET
  })

