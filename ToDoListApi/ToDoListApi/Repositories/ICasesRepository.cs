using ToDoListApi.Models;

namespace ToDoListApi.Repositories
{
    public interface ICasesRepository
    {
        IEnumerable<CaseTable> Get();
        CaseTable? Get(Guid id);
        void Add(CaseTable item);
        void Update(CaseTable item);
        CaseTable? Delete(Guid id);
    }
}
