import { BaseDatabase } from "./BaseDatabase";

export class FollowersDatabase extends BaseDatabase {
  private static TABLE_NAME = "Followers";

  public async followUser(
    followerId: string,
    followedId: string
  ): Promise<any> {
    try {
      await this.getConnection()
        .insert({
          followed_id: followedId,
          user_id: followerId,
        })
        .where({ user_id: followerId })
        .into(FollowersDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async unfollowUser(
    followerId: string,
    followedId: string
  ): Promise<any> {
    try {
      await this.getConnection()
        .delete()
        .from(FollowersDatabase.TABLE_NAME)
        .where({ user_id: followerId, followed_id: followedId });
    } catch (error) {
      throw new Error(error);
    }
  }
}