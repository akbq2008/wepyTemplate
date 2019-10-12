import request from '@/utils/request'

export function searchValue (data) {
    return request(
        '/s',
        'GET',
        data
    )
}