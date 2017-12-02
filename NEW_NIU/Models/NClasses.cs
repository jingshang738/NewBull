using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Linq.SqlClient;
//N_product
namespace N_Admin.Models
{
    public partial class N_Product
    {
        NDataContext N = new NDataContext();
        
        public IEnumerable<N_Product> ProductList()
        {
            //var result=from
            return N.N_Product;
        }
        //------------------------------detail--------------
        public N_Product GetProduct(int pid)
        {
            return N.N_Product.Where(xj => xj.id == pid).FirstOrDefault();
        }

        public IEnumerable<N_Product> GetLikeElecBike()
        {

            var result = from s in N.N_Product
                         where SqlMethods.Like(s.name, "小牛电动NIU%")
                         select s;
            return result;
        
          
        }

        public IEnumerable<ProductModel> GetAll()
        {
            //var result = from p in N.N_Product
            //             join c in N.N_Category on p.cid equals c.id               
            //             orderby p.id descending
            //             select new ProductModel()
            //             {
            //                id= p.id,
            //                name= p.name,
            //               count=  p.count,
            //               categoryname=c.chName,
            //               storeCoverPrice=p.storeCoverPrice,
            //                storeCoverPic= p.storeCoverPic,
            //                 Quantity = 0,
            //                createDate= createDate, 
            //                state= p.state };
            //必须是Quantity带上一个别名，进行访问，否则无法得到
            /**
             *  from p in N.N_Product
                         join c in N.N_Category on p.cid equals c.id               
                         orderby p.id descending
                         select new { p.id, p.name, p.count, c.chName, p.storeCoverPrice, p.storeCoverPic, Quantity=0,createDate, 
                             p.state };*/
            var result=  from p in N.N_Product
                         join c in N.N_Category on p.cid equals c.id
                         join k in N.N_Sku on p.id equals k.pId
                         group new { p, c, k } by new { p.id, p.name, p.count, c.chName, p.storeCoverPrice, p.storeCoverPic, p.createDate, p.state } into g
                         orderby g.Key.id descending
                         select new ProductModel()
                         {
                            id= g.Key.id,
                            name= g.Key.name,
                            count= g.Key.count,
                            categoryname= g.Key.chName,
                            storeCoverPrice=g.Key.storeCoverPrice,
                            storeCoverPic= g.Key.storeCoverPic,
                            Quantity = g.Sum(s => s.k.quantity),
                            createDate= g.Key.createDate, 
                            state= g.Key.state };
             
            return result as IEnumerable<ProductModel>;
        }

        //返回所有的颜色，通过sku表格里面pid等于，
        //取出所有等于这个id的skuid，取出
        public IEnumerable<OptionModel> GetOptions(int Id)
        {
            var result = from p in N.N_Product
                         //这里先是join o in 表而不是直接join表
                         join s in N.N_Sku on p.id equals s.pId
                         join o in N.N_Option on s.id equals o.skuId
                         where p.id == Id
                         group new {p,s,o} by new {o.optionName } into q
                         select new OptionModel()
                         {
                             name = q.Key.optionName,
                            valuesarr = string.Join(",",q.Select(x=>x.o.optionValues+x.o.id.ToString()))
                            //单独查询出来所有的值，进行拼接
                         };
            //必须写别名，否则无法转化
            /*
             * from n in db.News

                from c in db. Category

                from t in db. CatNew

                where n.ID == t.NewsID && c.ID == t.CategoryID

                group c by n.Title into q

                select new { q.Key, m1 = string.Join(",",q.Select(x=>x.CategoryName).ToArray()) }
             */
            return result ;
        }
        public void Delete(int id)
        {
            N.N_Product.DeleteOnSubmit(N.N_Product.Where(x => x.id == id).FirstOrDefault());

            N.SubmitChanges();
        }

        public N_Product GetName(int id)
        {
            return N.N_Product.Where(x => x.id == id).FirstOrDefault();
           
        }

        public IEnumerable<N_Product> GetAllProduct()
        {
            return N.N_Product;

        }

        public List<N_OptionImage> GetImages(int optionId)
        {
            var result = N.N_OptionImage.Where(x => x.optionId == optionId);
                List<N_OptionImage> list=new List<N_OptionImage>();
            foreach (var item in result)
            {
                list.Add(item);
            }
            return list;
        }
        public N_OptionOther GetOthers(int optionId)
        {
            return N.N_OptionOther.Where(x => x.optionId == optionId).FirstOrDefault();

        }

        

        public N_Sku GetSku(int skuId)
        {
            return N.N_Sku.Where(x => x.id == skuId).FirstOrDefault();

        }

        public List<N_Description> GetDescription(int pId, out string GOODS_INTRODUCTION)
        {
            var result= N.N_Description.Where(x => x.pId == pId);
            GOODS_INTRODUCTION="";
            List<N_Description> list = new List<N_Description>();
            foreach (var item in result)
            {
                if (item.descriptionType == "GOODS_INTRODUCTION")
                {
                    GOODS_INTRODUCTION = item.description;
                }
                list.Add(item);
            }
            
            return list;
        }

        public void Add(N_Product product)
        {
            N.N_Product.InsertOnSubmit(product);
            N.SubmitChanges();
        }
        
        public void Update(N_Product product)
        {
            var result = from a in N.N_Product
                         where a.id == product.id
                         select a;
            //result.Distinct();
            foreach (var item in result)
            {
                //item.Username = product.Username;
                //item.Password = product.Password;
            }

            N.SubmitChanges();
        }

        //public void Update(N_Product product)
        //{
        //    var result = from a in N.N_Product
        //                 where a.id == product.id
        //                 select a;

        //    foreach (var item in result)
        //    {
        //        //item.Username = product.Username;
        //        //item.Password = product.Password;
        //    }

        //    N.SubmitChanges();
        //}
    }
    //---------------------------------------------------
    public partial class N_Sku
    {
        NDataContext N = new NDataContext();
        public void Add(N_Sku sku)
        {
            N.N_Sku.InsertOnSubmit(sku);
            N.SubmitChanges();
        }

        public IEnumerable<string> GetAllFulfillment()
        {
            return N.N_Sku.Select(xj=>xj.fulfillmentType);
        }
        //--------------------------detail-----------------
        public SkuModel GetDefaultQuantity(int pid)
        {
            var result = from s in N.N_Sku 
                         join p in N.N_Product on s.pId equals p.id
                         where s.pId.Value == pid && s.isDefault==true
                         select new SkuModel{
                             quantity=s.quantity.Value,
                             salePrice=s.salePrice
                         }
           ;
            return result.FirstOrDefault();
        }
        public IEnumerable<N_Sku> GetAll()
        {
            return N.N_Sku;
        }

        public IEnumerable<N_Sku> GetNiuYouBaoSku()
        {
            var result = from s in N.N_Sku
                         where SqlMethods.Like(s.name, "%牛油保%")
                         select s;
            return result;
        }
        
    }

    //------------------------------------------------
    public partial class N_Option
    {
        NDataContext N = new NDataContext();
        public void Add(N_Option option)
        {
            N.N_Option.InsertOnSubmit(option);
            N.SubmitChanges();
        }

        public IEnumerable<string> GetAllName()
        {
            return N.N_Option.Select(xj => xj.optionName).Distinct();
        }
        //----------------------------detail-------------
        public IEnumerable<string> GetAllNameByPro(int pid)
        {
            var result = from o in N.N_Option
                         join s in N.N_Sku on o.skuId equals s.id
                         join p in N.N_Product on s.pId equals p.id
                         where s.pId.Value == pid
                         select o.optionName;
            return result.Distinct();
        }

        public IEnumerable<OptionValueIdM> GetOtherOptionValues(int pid)
        {
            var result = from o in N.N_Option
                         join s in N.N_Sku on o.skuId equals s.id
                         join p in N.N_Product on s.pId equals p.id
                         where s.pId.Value == pid && o.isMain == false
                         select new OptionValueIdM
                         {
                             optionId = o.id,
                             optionValues = o.optionValues
                         };
            //借用一下这个模型
            return result.Distinct();
        }

        //----------------------------------------

        public IEnumerable<OptionValueIdM> GetAllValuesByName(string name,int pid)
        {
            var result = from o in N.N_Option
                         join s in N.N_Sku on o.skuId equals s.id
                         join p in N.N_Product on s.pId equals p.id
                         where s.pId.Value == pid && o.optionName==name
                       select new OptionValueIdM
                       {
                           optionId = o.id,
                           optionValues = o.optionValues
                       };
           return result;
        }

   

        public IEnumerable<N_Sku> GetAll()
        {
            return N.N_Sku;
        }

        public string GetMainOptionName(int pid)
        {
            var result = from o in N.N_Option
                         join s in N.N_Sku on o.skuId equals s.id
                         join p in N.N_Product on s.pId equals p.id
                         where s.pId.Value == pid && o.isMain == true
                         select o.optionName;
                       
            return result.FirstOrDefault();
        }
        public string GetOtherOptionName(int pid)
        {
            var result = from o in N.N_Option
                         join s in N.N_Sku on o.skuId equals s.id
                         join p in N.N_Product on s.pId equals p.id
                         where s.pId.Value == pid && o.isMain == false
                         select o.optionName;

            return result.FirstOrDefault();
        }
        //-------------------------在sql里面查询可知，查询出来是 
        //------------------------颜色 红色
        //------------------------颜色 蓝色
        public IEnumerable<OptionValueIdM> GetMainOptionValues(int pid)
        {
            var result = from o in N.N_Option
                         join s in N.N_Sku on o.skuId equals s.id
                         join p in N.N_Product on s.pId equals p.id
                         where s.pId.Value == pid && o.isMain == true
                         select new OptionValueIdM
                         {
                             optionId=o.id,
                             optionValues=o.optionValues
                         };
            //借用一下这个模型
            return result;
        }

       

        public IEnumerable<OptionValueIdM> GetOtherOptionValues(int pid,string optionname)
        {
            var result = from o in N.N_Option
                         join s in N.N_Sku on o.skuId equals s.id
                         join p in N.N_Product on s.pId equals p.id
                         where s.pId.Value == pid && o.optionName==optionname
                         select new OptionValueIdM
                         {
                             optionId = o.id,
                             optionValues = o.optionValues
                         };
            //借用一下这个模型
            return result;
        }
    }

    //------------------------------------
    public partial class N_OptionImage
    {
        NDataContext N = new NDataContext();
        public void Add(N_OptionImage option)
        {
            N.N_OptionImage.InsertOnSubmit(option);
            N.SubmitChanges();
        }

        public IEnumerable<string> GetAllImg(int optionId)
        {
            return N.N_OptionImage.Where(xx=>xx.optionId==optionId).Select(xxx=>xxx.picBigUrl);
        }

        public IEnumerable<string> GetAllImage(int pid)
        {
            var result = from o in N.N_Option
                         join s in N.N_Sku on o.skuId equals s.id
                         join p in N.N_Product on s.pId equals p.id
                         join i in N.N_OptionImage on o.id equals i.optionId
                         where s.pId.Value == pid
                         select i.picBigUrl;
            //借用一下这个模型
            return result;
        }
    }

    //--------------------------------
    public partial class N_OptionOther
    {
        NDataContext N = new NDataContext();
        public void Add(N_OptionOther option)
        {
            N.N_OptionOther.InsertOnSubmit(option);
            N.SubmitChanges();
        }
    }

    public partial class N_Description
    {
        NDataContext N = new NDataContext();
        //public void Add(N_Description d)
        //{
        //    N.N_Description.InsertOnSubmit(d);
        //    N.SubmitChanges();
        //}

        public string  GetAll(string descriptionType, int pId)
        {
            var result = from d in N.N_Description
                         where d.descriptionType == descriptionType && d.pId == pId
                         select d.descriptionType;
            return result.FirstOrDefault();
        }

        public IEnumerable<N_Description> GetAll(int pId)
        {
            return N.N_Description.Where(xxx=>xxx.pId==pId);
        }
    }

   
}