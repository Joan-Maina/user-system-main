CREATE OR ALTER PROCEDURE [dbo].[getunassignedusers]
AS
SET NOCOUNT ON
BEGIN
select email from userDetails 
left join userProjects 
on userDetails.email = userProjects.userone 
and userDetails.email = userProjects.usertwo 
and userDetails.email = userProjects.userthree 
and userDetails.email = userProjects.userfour 
and userDetails.email = userProjects.userfive 
where email NOT in (SELECT userone from userProjects)
AND email NOT in (SELECT usertwo from userProjects) 
AND email not in (SELECT userthree from userProjects) 
AND email not in (SELECT userfour from userProjects) 
AND email not in (SELECT userfive from userProjects)
AND isDeleted  = 0;
END;