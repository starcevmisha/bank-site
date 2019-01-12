using System;
using System.Collections.Generic;
using System.Linq;
using bank_site.Models;
using Microsoft.EntityFrameworkCore;

namespace bank_site
{
    public class PaymentRequestsRepository : IRepository<PaymentRequestModel>
    {
        PaymentsContext db;

        public PaymentRequestsRepository()
        {
            db = new PaymentsContext();
        }

        public IEnumerable<PaymentRequestModel> GetAll()
        {
            return db.Requests.ToList();
        }

        public PaymentRequestModel Get(int id)
        {
            return db.Requests.Find(id);
        }

        public void Create(PaymentRequestModel item)
        {
            db.Requests.Add(item);
        }

        public void Update(PaymentRequestModel item)
        {
            db.Entry(item).State = EntityState.Modified;
        }

        public void Delete(int id)
        {
            var user = db.Payments.Find(id);
            if (user != null)
                db.Payments.Remove(user);
        }

        public void Save()
        {
            db.SaveChanges();
        }

        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    db.Dispose();
                }
            }

            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}