create database ToDoDatabase

use ToDoDatabase

create table CaseTable(
Id uniqueidentifier primary key not null,
Name varchar(200) not null,
CreateDate datetime not null default getdate(),
CloseDate datetime,
Deadline datetime
)

insert into CaseTable(Id,Name,CloseDate,Deadline) values(NEWID(),'Pokushat',DATEADD(day, 2, getdate()),DATEADD(day, 3, getdate()))
insert into CaseTable(Id,Name,CloseDate,Deadline) values(NEWID(),'Pospat',null,DATEADD(day, 3, getdate()))
insert into CaseTable(Id,Name,CloseDate,Deadline) values(NEWID(),'Powalkat',DATEADD(day, -1, getdate()),DATEADD(day, -2, getdate()))
insert into CaseTable(Id,Name,CloseDate,Deadline) values(NEWID(),'Do testovoye',null,DATEADD(day, -1, getdate()))

select* from CaseTable