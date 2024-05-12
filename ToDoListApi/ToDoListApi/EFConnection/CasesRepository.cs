using ToDoListApi.Models;

namespace ToDoListApi.Repositories
{
    public class CasesRepository : ICasesRepository
    {
        private EFContext Context;
        public CasesRepository(EFContext context)
        {
            Context = context;
        }
        public IEnumerable<CaseTable> Get()
        {
            return Context.CaseTable;
        }
        public CaseTable? Get(Guid Id)
        {
            return Context.CaseTable.Find(Id);
        }
        public void Add(CaseTable item)
        {
            Context.CaseTable.Add(item);
            Context.SaveChanges();
        }
        public void Update(CaseTable updatedTodoItem)
        {
            CaseTable? currentItem = Get(updatedTodoItem.Id);
            if (currentItem == null) return;
            currentItem.Name = updatedTodoItem.Name;
            currentItem.CreateDate = updatedTodoItem.CreateDate;
            currentItem.CloseDate = updatedTodoItem.CloseDate;
            currentItem.Deadline = updatedTodoItem.Deadline;

            Context.CaseTable.Update(currentItem);
            Context.SaveChanges();
        }

        public CaseTable? Delete(Guid Id)
        {
            CaseTable? todoItem = Get(Id);

            if (todoItem != null)
            {
                Context.CaseTable.Remove(todoItem);
                Context.SaveChanges();
            }

            return todoItem;
        }
    }
}
