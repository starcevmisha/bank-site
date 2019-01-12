using System;
using System.Collections.Generic;
using System.Linq;
using bank_site.Models;
using Microsoft.EntityFrameworkCore;

namespace bank_site
{
    public class CardPaymentRepository : IRepository<CardPayment>
    {
        PaymentsContext db;
        public CardPaymentRepository()
        {
            db = new PaymentsContext();
        }
        public IEnumerable<CardPayment> GetAll()
        {
            return db.Payments.ToList();
        }
 
        public CardPayment Get(int id)
        {
            return db.Payments.Find(id);
        }
 
        public void Create(CardPayment item)
        {
            db.Payments.Add(item);
        }
 
        public void Update(CardPayment item)
        {
            db.Entry(item).State = EntityState.Modified;
        }
 
        public void Delete(int id)
        {
            CardPayment user = db.Payments.Find(id);
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
    
    interface IRepository<T> : IDisposable
        where T : class
    {
        IEnumerable<T> GetAll();
        T Get(int id);
        void Create(T item);
        void Update(T item);
        void Delete(int id);
        void Save();
    }
}