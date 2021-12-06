-- 通过 * 把users表中所有的数据查询出来
-- select * from users
-- 从users表中把username和password对应的数据查询出来
--  username,password from users
-- 向users 表中插入新数据，username的值为tony stark password的值为098123
-- insert into users (username,password) values ('tony stark','098123')
-- 将id为4 的用户密码更新成888888
-- update users set password='888888' where id=4
-- select * from users 
-- 更新id为2 的用户，把用户密码更新为admin123同时，把用户的状态更新为1
-- update users set password='admin 123',status=1 where id=2 
-- select * from users
-- 删除users表中id为4 的用户
-- delete from users where id=4
-- select * from users

-- 演示where子句的使用
-- select *from users where status=1
-- select * from users where id>=2
-- select * from users where username<>'ls'

-- 使用and显示所有装态为0且id小于3的用户
-- select * from users where status=0 and id<3
-- 使用 or来显示所有状态为1或者username为zs的用户
-- select * from users where status=1 or username='zs'

-- 对users表中的数据，按照status字段进行升序排序
-- select * from users order by status
-- 对users表中的数据，按照id字段进行降序排序  desc表示降序排序   asc表示升序排序
-- select * from users order by id desc

-- 对users表中的数据，先按照status字段进行降序排序，再按照username的字母顺序进行升序排序
-- select * from users order by status desc,username asc
-- 查询users表中status为0的总数据条数
-- select count(*) from users where status=0
-- 使用AS关键字给列起别名
select count(*) as total from users where status=0
