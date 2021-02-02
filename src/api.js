// this file may be overwrite by api code builder, don't change it. Go to api.config.json to config output file
// 本文件可能会被 api code builder 重写覆盖，请勿修改它。配置 api.config.json 来修改生成文件
/* eslint-disable */
import axios from 'axios'

if (!axios.defaults.baseURL)
  axios.defaults.baseURL = '/'

export default {
  api: {
    /**
     * 获取发展建设内容
     * @param {{ type?: string }} path
     */
    getDevelopbuildingContentByType(path, axiosConfig) {
      const method = 'get'
      return axios(`/api/develop-building/content/${path.type}`, { method, ...axiosConfig }) 
    },
    /**
     * 获取历史沿革内容
     * @param {{ type?: string }} path
     */
    getHistoryevolutionContentByType(path, axiosConfig) {
      const method = 'get'
      return axios(`/api/history-evolution/content/${path.type}`, { method, ...axiosConfig }) 
    },
    /** 获取动画前言列表 */
    getHomeCartoonforeword(axiosConfig) {
      const method = 'get'
      return axios('/api/home/cartoon-foreword', { method, ...axiosConfig }) 
    },
    /** 获取菜单树列表 */
    getHomeMenutree(axiosConfig) {
      const method = 'get'
      return axios('/api/home/menu-tree', { method, ...axiosConfig }) 
    },
    /**
     * 根据菜单ID获取菜单列表
     * @param {{ mId?: number }} path
     */
    getHomeMenuByMId(path, axiosConfig) {
      const method = 'get'
      return axios(`/api/home/menu/${path.mId}`, { method, ...axiosConfig }) 
    },
    /**
     * 积分领取
     * @param {DTO} data
     */
    putHomePointscollection(data, axiosConfig) {
      const method = 'put'
      return axios('/api/home/points-collection', { method, data, ...axiosConfig }) 
    },
    /**
     * 获取签到页面信息
     * @param {{ userId?: string }} path
     */
    getHomeSigninfoByUserId(path, axiosConfig) {
      const method = 'get'
      return axios(`/api/home/sign-info/${path.userId}`, { method, ...axiosConfig }) 
    },
    /** 获取展望未来内容列表 */
    getLookfutureList(axiosConfig) {
      const method = 'get'
      return axios('/api/look-future/list', { method, ...axiosConfig }) 
    },
    /**
     * 获取队伍建设列表
     * @param {{ type?: string }} path
     */
    getTeambuildingListByType(path, axiosConfig) {
      const method = 'get'
      return axios(`/api/team-building/list/${path.type}`, { method, ...axiosConfig }) 
    }
  },
  bladeAuth: {
    /** 获取验证码 */
    getCaptcha(axiosConfig) {
      const method = 'get'
      return axios('/blade-auth/captcha', { method, ...axiosConfig }) 
    },
    /**
     * 获取认证信息
     * @param {{ source: string }} path
     * @param {{ auth_code?: string, authorization_code?: string, code?: string, oauth_token?: string, oauth_verifier?: string, state?: string }} params
     */
    getOauthCallbackBySource(path, params, axiosConfig) {
      const method = 'get'
      return axios(`/blade-auth/oauth/callback/${path.source}`, { method, params, ...axiosConfig }) 
    },
    /**
     * 获取认证信息
     * @param {{ source: string }} path
     * @param {{ auth_code?: string, authorization_code?: string, code?: string, oauth_token?: string, oauth_verifier?: string, state?: string }} params
     */
    headOauthCallbackBySource(path, params, axiosConfig) {
      const method = 'head'
      return axios(`/blade-auth/oauth/callback/${path.source}`, { method, params, ...axiosConfig }) 
    },
    /**
     * 获取认证信息
     * @param {{ source: string }} path
     * @param {{ auth_code?: string, authorization_code?: string, code?: string, oauth_token?: string, oauth_verifier?: string, state?: string }} params
     */
    postOauthCallbackBySource(path, params, axiosConfig) {
      const method = 'post'
      return axios(`/blade-auth/oauth/callback/${path.source}`, { method, params, ...axiosConfig }) 
    },
    /**
     * 获取认证信息
     * @param {{ source: string }} path
     * @param {{ auth_code?: string, authorization_code?: string, code?: string, oauth_token?: string, oauth_verifier?: string, state?: string }} params
     */
    putOauthCallbackBySource(path, params, axiosConfig) {
      const method = 'put'
      return axios(`/blade-auth/oauth/callback/${path.source}`, { method, params, ...axiosConfig }) 
    },
    /**
     * 获取认证信息
     * @param {{ source: string }} path
     * @param {{ auth_code?: string, authorization_code?: string, code?: string, oauth_token?: string, oauth_verifier?: string, state?: string }} params
     */
    deleteOauthCallbackBySource(path, params, axiosConfig) {
      const method = 'delete'
      return axios(`/blade-auth/oauth/callback/${path.source}`, { method, params, ...axiosConfig }) 
    },
    /**
     * 获取认证信息
     * @param {{ source: string }} path
     * @param {{ auth_code?: string, authorization_code?: string, code?: string, oauth_token?: string, oauth_verifier?: string, state?: string }} params
     */
    optionsOauthCallbackBySource(path, params, axiosConfig) {
      const method = 'options'
      return axios(`/blade-auth/oauth/callback/${path.source}`, { method, params, ...axiosConfig }) 
    },
    /**
     * 获取认证信息
     * @param {{ source: string }} path
     * @param {{ auth_code?: string, authorization_code?: string, code?: string, oauth_token?: string, oauth_verifier?: string, state?: string }} params
     */
    patchOauthCallbackBySource(path, params, axiosConfig) {
      const method = 'patch'
      return axios(`/blade-auth/oauth/callback/${path.source}`, { method, params, ...axiosConfig }) 
    },
    /**
     * 续期令牌
     * @param {{ source: string }} path
     * @param {{ token?: string }} params
     */
    getOauthRefreshBySource(path, params, axiosConfig) {
      const method = 'get'
      return axios(`/blade-auth/oauth/refresh/${path.source}`, { method, params, ...axiosConfig }) 
    },
    /**
     * 续期令牌
     * @param {{ source: string }} path
     * @param {{ token?: string }} params
     */
    headOauthRefreshBySource(path, params, axiosConfig) {
      const method = 'head'
      return axios(`/blade-auth/oauth/refresh/${path.source}`, { method, params, ...axiosConfig }) 
    },
    /**
     * 续期令牌
     * @param {{ source: string }} path
     * @param {{ token?: string }} params
     */
    postOauthRefreshBySource(path, params, axiosConfig) {
      const method = 'post'
      return axios(`/blade-auth/oauth/refresh/${path.source}`, { method, params, ...axiosConfig }) 
    },
    /**
     * 续期令牌
     * @param {{ source: string }} path
     * @param {{ token?: string }} params
     */
    putOauthRefreshBySource(path, params, axiosConfig) {
      const method = 'put'
      return axios(`/blade-auth/oauth/refresh/${path.source}`, { method, params, ...axiosConfig }) 
    },
    /**
     * 续期令牌
     * @param {{ source: string }} path
     * @param {{ token?: string }} params
     */
    deleteOauthRefreshBySource(path, params, axiosConfig) {
      const method = 'delete'
      return axios(`/blade-auth/oauth/refresh/${path.source}`, { method, params, ...axiosConfig }) 
    },
    /**
     * 续期令牌
     * @param {{ source: string }} path
     * @param {{ token?: string }} params
     */
    optionsOauthRefreshBySource(path, params, axiosConfig) {
      const method = 'options'
      return axios(`/blade-auth/oauth/refresh/${path.source}`, { method, params, ...axiosConfig }) 
    },
    /**
     * 续期令牌
     * @param {{ source: string }} path
     * @param {{ token?: string }} params
     */
    patchOauthRefreshBySource(path, params, axiosConfig) {
      const method = 'patch'
      return axios(`/blade-auth/oauth/refresh/${path.source}`, { method, params, ...axiosConfig }) 
    },
    /**
     * 授权完毕跳转
     * @param {{ source: string }} path
     */
    getOauthRenderBySource(path, axiosConfig) {
      const method = 'get'
      return axios(`/blade-auth/oauth/render/${path.source}`, { method, ...axiosConfig }) 
    },
    /**
     * 授权完毕跳转
     * @param {{ source: string }} path
     */
    headOauthRenderBySource(path, axiosConfig) {
      const method = 'head'
      return axios(`/blade-auth/oauth/render/${path.source}`, { method, ...axiosConfig }) 
    },
    /**
     * 授权完毕跳转
     * @param {{ source: string }} path
     */
    postOauthRenderBySource(path, axiosConfig) {
      const method = 'post'
      return axios(`/blade-auth/oauth/render/${path.source}`, { method, ...axiosConfig }) 
    },
    /**
     * 授权完毕跳转
     * @param {{ source: string }} path
     */
    putOauthRenderBySource(path, axiosConfig) {
      const method = 'put'
      return axios(`/blade-auth/oauth/render/${path.source}`, { method, ...axiosConfig }) 
    },
    /**
     * 授权完毕跳转
     * @param {{ source: string }} path
     */
    deleteOauthRenderBySource(path, axiosConfig) {
      const method = 'delete'
      return axios(`/blade-auth/oauth/render/${path.source}`, { method, ...axiosConfig }) 
    },
    /**
     * 授权完毕跳转
     * @param {{ source: string }} path
     */
    optionsOauthRenderBySource(path, axiosConfig) {
      const method = 'options'
      return axios(`/blade-auth/oauth/render/${path.source}`, { method, ...axiosConfig }) 
    },
    /**
     * 授权完毕跳转
     * @param {{ source: string }} path
     */
    patchOauthRenderBySource(path, axiosConfig) {
      const method = 'patch'
      return axios(`/blade-auth/oauth/render/${path.source}`, { method, ...axiosConfig }) 
    },
    /**
     * 撤销授权
     * @param {{ source: string, token: string }} path
     */
    getOauthRevokeBySourceByToken(path, axiosConfig) {
      const method = 'get'
      return axios(`/blade-auth/oauth/revoke/${path.source}/${path.token}`, { method, ...axiosConfig }) 
    },
    /**
     * 撤销授权
     * @param {{ source: string, token: string }} path
     */
    headOauthRevokeBySourceByToken(path, axiosConfig) {
      const method = 'head'
      return axios(`/blade-auth/oauth/revoke/${path.source}/${path.token}`, { method, ...axiosConfig }) 
    },
    /**
     * 撤销授权
     * @param {{ source: string, token: string }} path
     */
    postOauthRevokeBySourceByToken(path, axiosConfig) {
      const method = 'post'
      return axios(`/blade-auth/oauth/revoke/${path.source}/${path.token}`, { method, ...axiosConfig }) 
    },
    /**
     * 撤销授权
     * @param {{ source: string, token: string }} path
     */
    putOauthRevokeBySourceByToken(path, axiosConfig) {
      const method = 'put'
      return axios(`/blade-auth/oauth/revoke/${path.source}/${path.token}`, { method, ...axiosConfig }) 
    },
    /**
     * 撤销授权
     * @param {{ source: string, token: string }} path
     */
    deleteOauthRevokeBySourceByToken(path, axiosConfig) {
      const method = 'delete'
      return axios(`/blade-auth/oauth/revoke/${path.source}/${path.token}`, { method, ...axiosConfig }) 
    },
    /**
     * 撤销授权
     * @param {{ source: string, token: string }} path
     */
    optionsOauthRevokeBySourceByToken(path, axiosConfig) {
      const method = 'options'
      return axios(`/blade-auth/oauth/revoke/${path.source}/${path.token}`, { method, ...axiosConfig }) 
    },
    /**
     * 撤销授权
     * @param {{ source: string, token: string }} path
     */
    patchOauthRevokeBySourceByToken(path, axiosConfig) {
      const method = 'patch'
      return axios(`/blade-auth/oauth/revoke/${path.source}/${path.token}`, { method, ...axiosConfig }) 
    },
    /**
     * 获取认证token
     * @explain 传入租户ID:tenantId,账号:account,密码:password
     * @param {{ account?: string, grantType: string, password?: string, refreshToken?: string, tenantId: string }} params
     */
    postToken(params, axiosConfig) {
      const method = 'post'
      return axios('/blade-auth/token', { method, params, ...axiosConfig }) 
    }
  },
  bladeDesk: {
    /**
     * 详情
     * @explain 传入notice
     * @param {{ category?: number, content?: string, createTime?: string, createUser?: number, id?: number, isDeleted?: number, releaseTime?: string, status?: number, title?: string, updateTime?: string, updateUser?: number }} params
     */
    getNoticeDetail(params, axiosConfig) {
      const method = 'get'
      return axios('/blade-desk/notice/detail', { method, params, ...axiosConfig }) 
    },
    /**
     * 分页
     * @explain 传入notice
     * @param {{ category?: ref, current?: number, size?: number, title?: string }} params
     */
    getNoticeList(params, axiosConfig) {
      const method = 'get'
      return axios('/blade-desk/notice/list', { method, params, ...axiosConfig }) 
    },
    /**
     * 消息
     * @explain 消息
     */
    getNoticeMynotices(axiosConfig) {
      const method = 'get'
      return axios('/blade-desk/notice/my-notices', { method, ...axiosConfig }) 
    },
    /**
     * 消息
     * @explain 消息
     */
    getNoticeNotices(axiosConfig) {
      const method = 'get'
      return axios('/blade-desk/notice/notices', { method, ...axiosConfig }) 
    },
    /**
     * 逻辑删除
     * @explain 传入notice
     * @param {{ ids?: string }} params
     */
    postNoticeRemove(params, axiosConfig) {
      const method = 'post'
      return axios('/blade-desk/notice/remove', { method, params, ...axiosConfig }) 
    },
    /**
     * 新增
     * @explain 传入notice
     * @param {Notice} data
     */
    postNoticeSave(data, axiosConfig) {
      const method = 'post'
      return axios('/blade-desk/notice/save', { method, data, ...axiosConfig }) 
    },
    /**
     * 新增或修改
     * @explain 传入notice
     * @param {Notice} data
     */
    postNoticeSubmit(data, axiosConfig) {
      const method = 'post'
      return axios('/blade-desk/notice/submit', { method, data, ...axiosConfig }) 
    },
    /**
     * 修改
     * @explain 传入notice
     * @param {Notice} data
     */
    postNoticeUpdate(data, axiosConfig) {
      const method = 'post'
      return axios('/blade-desk/notice/update', { method, data, ...axiosConfig }) 
    }
  },
  bladeDevelop: {
    /**
     * 详情
     * @explain 传入datasource
     * @param {{ createTime?: string, createUser?: number, driverClass?: string, id?: number, isDeleted?: number, name?: string, password?: string, remark?: string, status?: number, updateTime?: string, updateUser?: number, url?: string, username?: string }} params
     */
    getDatasourceDetail(params, axiosConfig) {
      const method = 'get'
      return axios('/blade-develop/datasource/detail', { method, params, ...axiosConfig }) 
    },
    /**
     * 分页
     * @explain 传入datasource
     * @param {{ createTime?: string, createUser?: number, current?: number, driverClass?: string, id?: number, isDeleted?: number, name?: string, password?: string, remark?: string, size?: number, status?: number, updateTime?: string, updateUser?: number, url?: string, username?: string }} params
     */
    getDatasourceList(params, axiosConfig) {
      const method = 'get'
      return axios('/blade-develop/datasource/list', { method, params, ...axiosConfig }) 
    },
    /**
     * 逻辑删除
     * @explain 传入ids
     * @param {{ ids: string }} params
     */
    postDatasourceRemove(params, axiosConfig) {
      const method = 'post'
      return axios('/blade-develop/datasource/remove', { method, params, ...axiosConfig }) 
    },
    /**
     * 新增
     * @explain 传入datasource
     * @param {Datasource} data
     */
    postDatasourceSave(data, axiosConfig) {
      const method = 'post'
      return axios('/blade-develop/datasource/save', { method, data, ...axiosConfig }) 
    },
    /**
     * 下拉数据源
     * @explain 查询列表
     */
    getDatasourceSelect(axiosConfig) {
      const method = 'get'
      return axios('/blade-develop/datasource/select', { method, ...axiosConfig }) 
    },
    /**
     * 新增或修改
     * @explain 传入datasource
     * @param {Datasource} data
     */
    postDatasourceSubmit(data, axiosConfig) {
      const method = 'post'
      return axios('/blade-develop/datasource/submit', { method, data, ...axiosConfig }) 
    },
    /**
     * 修改
     * @explain 传入datasource
     * @param {Datasource} data
     */
    postDatasourceUpdate(data, axiosConfig) {
      const method = 'post'
      return axios('/blade-develop/datasource/update', { method, data, ...axiosConfig }) 
    }
  },
  bladeResource: {
    /**
     * copyFile
     * @param {{ destBucketName: string, destFileName?: string, fileName: string }} params
     */
    postOssEndpointCopyfile(params, axiosConfig) {
      const method = 'post'
      return axios('/blade-resource/oss/endpoint/copy-file', { method, params, ...axiosConfig }) 
    },
    /**
     * fileLink
     * @param {{ fileName: string }} params
     */
    getOssEndpointFilelink(params, axiosConfig) {
      const method = 'get'
      return axios('/blade-resource/oss/endpoint/file-link', { method, params, ...axiosConfig }) 
    },
    /**
     * filePath
     * @param {{ fileName: string }} params
     */
    getOssEndpointFilepath(params, axiosConfig) {
      const method = 'get'
      return axios('/blade-resource/oss/endpoint/file-path', { method, params, ...axiosConfig }) 
    },
    /**
     * makeBucket
     * @param {{ bucketName: string }} params
     */
    postOssEndpointMakebucket(params, axiosConfig) {
      const method = 'post'
      return axios('/blade-resource/oss/endpoint/make-bucket', { method, params, ...axiosConfig }) 
    },
    /**
     * putFile
     * @param {{ file: any }} formData
     */
    postOssEndpointPutfile(formData, axiosConfig) {
      const method = 'post'
      const data = new FormData()
      Object.entries(formData).forEach(([name, value]) => {
        if (value === undefined) return
        if (value instanceof Array)
          value.forEach(value => data.append(name, value))
        else
          data.append(name, value)
      })
      return axios('/blade-resource/oss/endpoint/put-file', { method, data, ...axiosConfig }) 
    },
    /**
     * putFile
     * @param {{ fileName: string }} params
     * @param {{ file: any }} formData
     */
    postOssEndpointPutfilebyname(params, formData, axiosConfig) {
      const method = 'post'
      const data = new FormData()
      Object.entries(formData).forEach(([name, value]) => {
        if (value === undefined) return
        if (value instanceof Array)
          value.forEach(value => data.append(name, value))
        else
          data.append(name, value)
      })
      return axios('/blade-resource/oss/endpoint/put-file-by-name', { method, params, data, ...axiosConfig }) 
    },
    /**
     * removeBucket
     * @param {{ bucketName: string }} params
     */
    postOssEndpointRemovebucket(params, axiosConfig) {
      const method = 'post'
      return axios('/blade-resource/oss/endpoint/remove-bucket', { method, params, ...axiosConfig }) 
    },
    /**
     * removeFile
     * @param {{ fileName: string }} params
     */
    postOssEndpointRemovefile(params, axiosConfig) {
      const method = 'post'
      return axios('/blade-resource/oss/endpoint/remove-file', { method, params, ...axiosConfig }) 
    },
    /**
     * removeFiles
     * @param {{ fileNames: string }} params
     */
    postOssEndpointRemovefiles(params, axiosConfig) {
      const method = 'post'
      return axios('/blade-resource/oss/endpoint/remove-files', { method, params, ...axiosConfig }) 
    },
    /**
     * statFile
     * @param {{ fileName: string }} params
     */
    getOssEndpointStatfile(params, axiosConfig) {
      const method = 'get'
      return axios('/blade-resource/oss/endpoint/stat-file', { method, params, ...axiosConfig }) 
    }
  },
  bladeSystem: {
    /**
     * 详情
     * @explain 传入post
     * @param {{ category?: number, createTime?: string, createUser?: number, id?: number, isDeleted?: number, postCode?: string, postName?: string, remark?: string, sort?: number, status?: number, tenantId?: string, updateTime?: string, updateUser?: number }} params
     */
    getPostDetail(params, axiosConfig) {
      const method = 'get'
      return axios('/blade-system/post/detail', { method, params, ...axiosConfig }) 
    },
    /**
     * 分页
     * @explain 传入post
     * @param {{ category?: number, createTime?: string, createUser?: number, current?: number, id?: number, isDeleted?: number, postCode?: string, postName?: string, remark?: string, size?: number, sort?: number, status?: number, tenantId?: string, updateTime?: string, updateUser?: number }} params
     */
    getPostList(params, axiosConfig) {
      const method = 'get'
      return axios('/blade-system/post/list', { method, params, ...axiosConfig }) 
    },
    /**
     * 分页
     * @explain 传入post
     * @param {{ category?: number, createTime?: string, createUser?: number, current?: number, id?: number, isDeleted?: number, postCode?: string, postName?: string, remark?: string, size?: number, sort?: number, status?: number, tenantId?: string, updateTime?: string, updateUser?: number, categoryName?: string }} params
     */
    getPostPage(params, axiosConfig) {
      const method = 'get'
      return axios('/blade-system/post/page', { method, params, ...axiosConfig }) 
    },
    /**
     * 逻辑删除
     * @explain 传入ids
     * @param {{ ids: string }} params
     */
    postPostRemove(params, axiosConfig) {
      const method = 'post'
      return axios('/blade-system/post/remove', { method, params, ...axiosConfig }) 
    },
    /**
     * 新增
     * @explain 传入post
     * @param {Post} data
     */
    postPostSave(data, axiosConfig) {
      const method = 'post'
      return axios('/blade-system/post/save', { method, data, ...axiosConfig }) 
    },
    /**
     * 下拉数据源
     * @explain 传入post
     * @param {{ tenantId?: string }} params
     */
    getPostSelect(params, axiosConfig) {
      const method = 'get'
      return axios('/blade-system/post/select', { method, params, ...axiosConfig }) 
    },
    /**
     * 新增或修改
     * @explain 传入post
     * @param {Post} data
     */
    postPostSubmit(data, axiosConfig) {
      const method = 'post'
      return axios('/blade-system/post/submit', { method, data, ...axiosConfig }) 
    },
    /**
     * 修改
     * @explain 传入post
     * @param {Post} data
     */
    postPostUpdate(data, axiosConfig) {
      const method = 'post'
      return axios('/blade-system/post/update', { method, data, ...axiosConfig }) 
    },
    /**
     * 详情
     * @explain 传入region
     * @param {{ ancestors?: string, cityCode?: string, cityName?: string, code?: string, districtCode?: string, districtName?: string, level?: number, name?: string, parentCode?: string, provinceCode?: string, provinceName?: string, remark?: string, sort?: number, townCode?: string, townName?: string, villageCode?: string, villageName?: string }} params
     */
    getRegionDetail(params, axiosConfig) {
      const method = 'get'
      return axios('/blade-system/region/detail', { method, params, ...axiosConfig }) 
    },
    /**
     * 懒加载列表
     * @explain 传入menu
     * @param {{ code?: string, name?: string, parentCode?: string }} params
     */
    getRegionLazylist(params, axiosConfig) {
      const method = 'get'
      return axios('/blade-system/region/lazy-list', { method, params, ...axiosConfig }) 
    },
    /**
     * 懒加载列表
     * @explain 传入menu
     * @param {{ code?: string, name?: string, parentCode?: string }} params
     */
    getRegionLazytree(params, axiosConfig) {
      const method = 'get'
      return axios('/blade-system/region/lazy-tree', { method, params, ...axiosConfig }) 
    },
    /**
     * 分页
     * @explain 传入region
     * @param {{ ancestors?: string, cityCode?: string, cityName?: string, code?: string, current?: number, districtCode?: string, districtName?: string, level?: number, name?: string, parentCode?: string, provinceCode?: string, provinceName?: string, remark?: string, size?: number, sort?: number, townCode?: string, townName?: string, villageCode?: string, villageName?: string }} params
     */
    getRegionList(params, axiosConfig) {
      const method = 'get'
      return axios('/blade-system/region/list', { method, params, ...axiosConfig }) 
    },
    /**
     * 删除
     * @explain 传入主键
     * @param {{ id: string }} params
     */
    postRegionRemove(params, axiosConfig) {
      const method = 'post'
      return axios('/blade-system/region/remove', { method, params, ...axiosConfig }) 
    },
    /**
     * 新增
     * @explain 传入region
     * @param {Region} data
     */
    postRegionSave(data, axiosConfig) {
      const method = 'post'
      return axios('/blade-system/region/save', { method, data, ...axiosConfig }) 
    },
    /**
     * 下拉数据源
     * @explain 传入tenant
     * @param {{ code?: string }} params
     */
    getRegionSelect(params, axiosConfig) {
      const method = 'get'
      return axios('/blade-system/region/select', { method, params, ...axiosConfig }) 
    },
    /**
     * 新增或修改
     * @explain 传入region
     * @param {Region} data
     */
    postRegionSubmit(data, axiosConfig) {
      const method = 'post'
      return axios('/blade-system/region/submit', { method, data, ...axiosConfig }) 
    },
    /**
     * 修改
     * @explain 传入region
     * @param {Region} data
     */
    postRegionUpdate(data, axiosConfig) {
      const method = 'post'
      return axios('/blade-system/region/update', { method, data, ...axiosConfig }) 
    }
  }
}

/**
 * @typedef AuthInfo
 * @property {string} [accessToken] 令牌
 * @property {string} [account] 账号名
 * @property {string} [authority] 角色名
 * @property {string} [avatar] 头像
 * @property {number} [expiresIn] 过期时间
 * @property {string} [license] 许可证
 * @property {string} [oauthId] 第三方系统ID
 * @property {string} [refreshToken] 刷新令牌
 * @property {string} [tenantId] 租户ID
 * @property {string} [tokenType] 令牌类型
 * @property {number} [userId] 用户ID
 * @property {string} [userName] 用户名
 */
/**
 * @typedef BladeFile
 * @property {string} [link]
 * @property {string} [name]
 * @property {string} [originalName]
 */
/**
 * @typedef Character
 */
/**
 * @typedef Datasource
 * @property {string} [createTime] 创建时间
 * @property {number} [createUser] 创建人
 * @property {string} [driverClass] 驱动类
 * @property {number} [id] 主键
 * @property {number} [isDeleted] 是否已删除
 * @property {string} [name] 名称
 * @property {string} [password] 密码
 * @property {string} [remark] 备注
 * @property {number} [status] 业务状态
 * @property {string} [updateTime] 更新时间
 * @property {number} [updateUser] 更新人
 * @property {string} [url] 连接地址
 * @property {string} [username] 用户名
 */
/**
 * @typedef INode
 * @property {INode[]} [children]
 * @property {boolean} [hasChildren]
 * @property {number} [id]
 * @property {number} [parentId]
 */
/**
 * @typedef IPageDatasource
 * @property {number} [current]
 * @property {boolean} [hitCount]
 * @property {number} [pages]
 * @property {Datasource[]} [records]
 * @property {boolean} [searchCount]
 * @property {number} [size]
 * @property {number} [total]
 */
/**
 * @typedef IPageNoticeVO
 * @property {number} [current]
 * @property {boolean} [hitCount]
 * @property {number} [pages]
 * @property {NoticeVO[]} [records]
 * @property {boolean} [searchCount]
 * @property {number} [size]
 * @property {number} [total]
 */
/**
 * @typedef IPagePostVO
 * @property {number} [current]
 * @property {boolean} [hitCount]
 * @property {number} [pages]
 * @property {PostVO[]} [records]
 * @property {boolean} [searchCount]
 * @property {number} [size]
 * @property {number} [total]
 */
/**
 * @typedef IPageRegion
 * @property {number} [current]
 * @property {boolean} [hitCount]
 * @property {number} [pages]
 * @property {Region[]} [records]
 * @property {boolean} [searchCount]
 * @property {number} [size]
 * @property {number} [total]
 */
/**
 * @typedef Kv
 */
/**
 * @typedef Locale
 * @property {string} [country]
 * @property {string} [displayCountry]
 * @property {string} [displayLanguage]
 * @property {string} [displayName]
 * @property {string} [displayScript]
 * @property {string} [displayVariant]
 * @property {Character[]} [extensionKeys]
 * @property {string} [iso3Country]
 * @property {string} [iso3Language]
 * @property {string} [language]
 * @property {string} [script]
 * @property {string[]} [unicodeLocaleAttributes]
 * @property {string[]} [unicodeLocaleKeys]
 * @property {string} [variant]
 */
/**
 * @typedef Notice
 * @property {number} [category] 通知类型
 * @property {string} [content] 内容
 * @property {string} [createTime] 创建时间
 * @property {number} [createUser] 创建人
 * @property {number} [id] 主键
 * @property {number} [isDeleted] 是否已删除
 * @property {string} [releaseTime] 发布日期
 * @property {number} [status] 业务状态
 * @property {string} [title] 标题
 * @property {string} [updateTime] 更新时间
 * @property {number} [updateUser] 更新人
 */
/**
 * @typedef NoticeVO
 * @property {number} [category] 通知类型
 * @property {string} [categoryName] 通知类型名
 * @property {string} [content] 内容
 * @property {string} [createTime] 创建时间
 * @property {number} [createUser] 创建人
 * @property {number} [id] 主键
 * @property {number} [isDeleted] 是否已删除
 * @property {string} [releaseTime] 发布日期
 * @property {number} [status] 业务状态
 * @property {string} [title] 标题
 * @property {string} [updateTime] 更新时间
 * @property {number} [updateUser] 更新人
 */
/**
 * @typedef OssFile
 * @property {string} [contentType]
 * @property {string} [hash]
 * @property {number} [length]
 * @property {string} [link]
 * @property {string} [name]
 * @property {string} [putTime]
 */
/**
 * @typedef PostVO
 * @property {number} [category] 类型
 * @property {string} [categoryName]
 * @property {string} [createTime] 创建时间
 * @property {number} [createUser] 创建人
 * @property {number} [id] 主键
 * @property {number} [isDeleted] 是否已删除
 * @property {string} [postCode] 岗位编号
 * @property {string} [postName] 岗位名称
 * @property {string} [remark] 岗位描述
 * @property {number} [sort] 岗位排序
 * @property {number} [status] 业务状态
 * @property {string} [tenantId] 租户ID
 * @property {string} [updateTime] 更新时间
 * @property {number} [updateUser] 更新人
 */
/**
 * @typedef Post
 * @property {number} [category] 类型
 * @property {string} [createTime] 创建时间
 * @property {number} [createUser] 创建人
 * @property {number} [id] 主键
 * @property {number} [isDeleted] 是否已删除
 * @property {string} [postCode] 岗位编号
 * @property {string} [postName] 岗位名称
 * @property {string} [remark] 岗位描述
 * @property {number} [sort] 岗位排序
 * @property {number} [status] 业务状态
 * @property {string} [tenantId] 租户ID
 * @property {string} [updateTime] 更新时间
 * @property {number} [updateUser] 更新人
 */
/**
 * @typedef R
 * @property {number} code 状态码
 * @property {any} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RegionVO
 * @property {string} [ancestors] 祖区划编号
 * @property {INode[]} [children]
 * @property {string} [cityCode] 市级区划编号
 * @property {string} [cityName] 市级名称
 * @property {string} [code] 区划编号
 * @property {string} [districtCode] 区级区划编号
 * @property {string} [districtName] 区级名称
 * @property {boolean} [hasChildren]
 * @property {number} [id]
 * @property {number} [level] 层级
 * @property {string} [name] 区划名称
 * @property {string} [parentCode] 父区划编号
 * @property {number} [parentId]
 * @property {string} [parentName]
 * @property {string} [provinceCode] 省级区划编号
 * @property {string} [provinceName] 省级名称
 * @property {string} [remark] 备注
 * @property {number} [sort] 排序
 * @property {string} [townCode] 镇级区划编号
 * @property {string} [townName] 镇级名称
 * @property {string} [villageCode] 村级区划编号
 * @property {string} [villageName] 村级名称
 */
/**
 * @typedef Region
 * @property {string} [ancestors] 祖区划编号
 * @property {string} [cityCode] 市级区划编号
 * @property {string} [cityName] 市级名称
 * @property {string} [code] 区划编号
 * @property {string} [districtCode] 区级区划编号
 * @property {string} [districtName] 区级名称
 * @property {number} [level] 层级
 * @property {string} [name] 区划名称
 * @property {string} [parentCode] 父区划编号
 * @property {string} [provinceCode] 省级区划编号
 * @property {string} [provinceName] 省级名称
 * @property {string} [remark] 备注
 * @property {number} [sort] 排序
 * @property {string} [townCode] 镇级区划编号
 * @property {string} [townName] 镇级名称
 * @property {string} [villageCode] 村级区划编号
 * @property {string} [villageName] 村级名称
 */
/**
 * @typedef RAuthInfo
 * @property {number} code 状态码
 * @property {AuthInfo} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RBladeFile
 * @property {number} code 状态码
 * @property {BladeFile} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RDatasource
 * @property {number} code 状态码
 * @property {Datasource} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RIPageDatasource
 * @property {number} code 状态码
 * @property {IPageDatasource} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RIPageNoticeVO
 * @property {number} code 状态码
 * @property {IPageNoticeVO} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RIPagePostVO
 * @property {number} code 状态码
 * @property {IPagePostVO} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RIPageRegion
 * @property {number} code 状态��
 * @property {IPageRegion} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RKv
 * @property {number} code 状态码
 * @property {any} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RListDatasource
 * @property {number} code 状态码
 * @property {Datasource[]} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RListINode
 * @property {number} code 状态码
 * @property {INode[]} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RListPost
 * @property {number} code 状态码
 * @property {Post[]} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RListRegion
 * @property {number} code 状态码
 * @property {Region[]} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RListstring
 * @property {number} code 状态码
 * @property {string[]} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RListVO
 * @property {number} code 状态码
 * @property {VO[]} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RListVO
 * @property {number} code 状态码
 * @property {VO[]} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RListVO
 * @property {number} code 状态码
 * @property {VO[]} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RListVO
 * @property {number} code 状态码
 * @property {VO[]} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RListVO
 * @property {number} code 状态码
 * @property {VO[]} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RNoticeVO
 * @property {number} code 状态码
 * @property {NoticeVO} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef ROssFile
 * @property {number} code 状态码
 * @property {OssFile} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RPostVO
 * @property {number} code 状态码
 * @property {PostVO} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RRegionVO
 * @property {number} code 状态码
 * @property {RegionVO} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef RVoid
 * @property {number} code 状态码
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef Rstring
 * @property {number} code 状态码
 * @property {string} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是���成功
 */
/**
 * @typedef RVO
 * @property {number} code 状态码
 * @property {VO} [data] 承载数据
 * @property {string} msg 返回消息
 * @property {boolean} success 是否成功
 */
/**
 * @typedef DTO
 * @property {number} [endBrowseTime] 结束浏览时间戳（类型为2该字段必传）
 * @property {number} [startBrowseTime] 起始浏览时间戳（类型为2该字段必传）
 * @property {string} [type] 1为签到、2为浏览加分、3为“历史沿革”单项加分，4为“队伍建设”单项加分、5为“建设发展”单项加分、6为“未来展望”加分、7为分享加分
 * @property {string} [userId] 账号ID
 */
/**
 * @typedef VO
 * @property {string} [cartoonUrl] 动画URL
 * @property {string} [foreWord] 前言
 */
/**
 * @typedef VO
 * @property {string} [content] 内容
 * @property {string} [title] 标题
 */
/**
 * @typedef VO
 * @property {string} [content] 内容
 * @property {string} [title] 标题
 * @property {string} [url] 设备全景图
 */
/**
 * @typedef VO
 * @property {number} [continuitySignInDayNum] 连续签到天数
 * @property {number} [currentDay] 当前天
 * @property {number[]} [signInDayList] 签到天数集合
 * @property {number} [signInPoints] 签到可获得积分点数
 */
/**
 * @typedef VO
 * @property {VO[]} [childMenuList] 子菜单列表
 * @property {string} [isLast] 是否最后节点：0否，1是
 * @property {string} [menuName] 菜单名称
 * @property {string} [menuUrl] 菜单URL
 * @property {number} [mid]
 */
/**
 * @typedef VO
 * @property {string} [content] 内容
 * @property {string} [title] 标题
 */
