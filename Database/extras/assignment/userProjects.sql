CREATE TABLE [dbo].[userProjects]
(
projectId INT NOT NULL,
userone VARCHAR(255),
usertwo VARCHAR(255),
userthree VARCHAR(255),
userfour VARCHAR(255),
userfive VARCHAR(255),
FOREIGN KEY (projectId) REFERENCES [dbo].[projectDetails] (projectId),
FOREIGN KEY (userone) REFERENCES [dbo].[userDetails] (email),
FOREIGN KEY (usertwo) REFERENCES  [dbo].[userDetails] (email),
FOREIGN KEY (userthree) REFERENCES  [dbo].[userDetails] (email),
FOREIGN KEY (userfour) REFERENCES  [dbo].[userDetails] (email),
FOREIGN KEY (userfive) REFERENCES  [dbo].[userDetails] (email)
)