using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Aliyun.OSS;
using Aliyun.OSS.Common;
using System.Configuration;
namespace N_Admin.Models
{
    public class OssClientUp
    {

        static string accessKeyId = ConfigurationManager.AppSettings["id"].ToString();
        static string accessKeySecret = ConfigurationManager.AppSettings["secret"].ToString();
        static string endpoint = ConfigurationManager.AppSettings["url"].ToString();



       

        /// <summary>
        /// 由用户指定的OSS访问地址、阿里云颁发的AccessKeyId/AccessKeySecret构造一个新的OssClient实例。
        /// </summary>
        /// <param name="endpoint">OSS的访问地址。</param>
        /// <param name="accessKeyId">OSS的访问ID。</param>
        /// <param name="accessKeySecret">OSS的访问密钥。</param>
        OssClient ossClient = new OssClient(endpoint, accessKeyId, accessKeySecret);

        public void Config()
        {
            // 创建ClientConfiguration实例
            ClientConfiguration conf = new ClientConfiguration();
            // 配置使用Cname
            conf.IsCname = true;
            //conf.ConnectionLimit = 512;
            //conf.MaxErrorRetry = 3;
            //conf.ConnectionTimeout = 300;
            /// <summary>
            /// 由用户指定的OSS访问地址、、阿里云颁发的AccessKeyId/AccessKeySecret、客户端配置
            /// 构造一个新的OssClient实例。
            /// </summary>
            /// <param name="endpoint">OSS的访问地址。</param>
            /// <param name="accessKeyId">OSS的访问ID。</param>
            /// <param name="accessKeySecret">OSS的访问密钥。</param>
            /// <param name="conf">客户端配置。</param>
            OssClient client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);

        }

        /// <summary>
        /// 上传指定的文件到指定的OSS的存储空间
        /// </summary>
        /// <param name="bucketName">指定的存储空间名称</param>
        /// <param name="key">文件的在OSS上保存的名称</param>
        /// <param name="fileToUpload">指定上传文件的本地路径</param>
        public string PutObject(string bucketName, string key, string fileToUpload)
        {
            try
            {
                var result = ossClient.PutObject(bucketName, key, fileToUpload);
                return null;
            }
            catch (Exception e)
            {
                return "上传失败，" + e.Message;
            }
        }

        /// <summary>
        /// 列出指定存储空间下的特定文件
        /// </summary>
        /// <param name="bucketName">存储空间的名称</param>
        /// <param name="key">文件的名称</param>
        public string DeleteObject(string bucketName, string key)
        {
            try
            {
                ossClient.DeleteObject(bucketName, key);
                return "Delete object succeeded";
            }
            catch (Exception ex)
            {
                return string.Format("Delete object failed. {0}", ex.Message);
            }
        }
    }
}